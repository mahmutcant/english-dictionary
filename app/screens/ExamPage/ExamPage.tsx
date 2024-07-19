import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, Pressable } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { FIREBASE_AUTH, FIRESTORE_RT_DB } from '../../../FirebaseConfig';

interface WordDetail {
    level: string;
    word: string;
}

interface EducationContextModel {
    [key: string]: WordDetail;
}

const ExamPage = () => {
    const [educationContext, setEducationContext] = useState<EducationContextModel | undefined>(undefined);
    const [questions, setQuestions] = useState<{ question: string, options: string[], correctAnswer: string }[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [correctCount, setCorrectCount] = useState(0);
    const db = FIRESTORE_RT_DB;
    const auth = FIREBASE_AUTH;

    useEffect(() => {
        const educationContextRef = ref(db, 'users/' + auth.currentUser?.uid + "/education_context/");
        const unsubscribe = onValue(educationContextRef, (snapshot) => {
            const data = snapshot.val() as EducationContextModel | null;
            setEducationContext(data || undefined);

            if (data) {
                const generatedQuestions = generateQuestions(data);
                setQuestions(generatedQuestions);
            }
        }, (error) => {
            console.error("Veri okuma hatası:", error);
        });

        return () => unsubscribe();
    }, []);

    const generateQuestions = (data: EducationContextModel) => {
        const keys = Object.keys(data);
        const questions = keys.flatMap(key => {
            const word = data[key].word;
            const questionType1 = {
                question: word,
                options: shuffleArray([key, ...getRandomKeys(keys, key, 3)]),
                correctAnswer: key,
            };

            const questionType2 = {
                question: key,
                options: shuffleArray([word, ...getRandomWords(data, word, 3)]),
                correctAnswer: word,
            };

            return [questionType1, questionType2];
        });
        return shuffleArray(questions);
    };

    const getRandomKeys = (keys: string[], exclude: string, count: number) => {
        const filteredKeys = keys.filter(key => key !== exclude);
        const shuffled = shuffleArray(filteredKeys);
        return shuffled.slice(0, count);
    };

    const getRandomWords = (data: EducationContextModel, exclude: string, count: number) => {
        const words = Object.values(data).map(detail => detail.word);
        const filteredWords = words.filter(word => word !== exclude);
        const shuffled = shuffleArray(filteredWords);
        return shuffled.slice(0, count);
    };

    const shuffleArray = (array: any[]) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const handleAnswerPress = (selectedOption: string, correctAnswer: string) => {
        setSelectedOption(selectedOption);
        setIsCorrect(selectedOption === correctAnswer);
        setCorrectCount(selectedOption === correctAnswer ? (correctCount + 1) : correctCount)
        setTimeout(() => {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null);
            setIsCorrect(null);
        }, 1000);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        const generatedQuestions = generateQuestions(educationContext!);
        setQuestions(generatedQuestions);
    };

    if (currentQuestionIndex >= questions.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>Tebrikler, sınavı tamamladınız!</Text>
                <Text style={styles.question}>{correctCount} adet doğru cevap verdiniz</Text>
                <Button title="Baştan Başla" onPress={handleRestart} />
            </View>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>{currentQuestion.question}</Text>
                {currentQuestion.options.map((option, i) => (
                    <Pressable
                        key={i}
                        style={[
                            styles.optionButton,
                            selectedOption === option && {
                                backgroundColor: isCorrect ? 'green' : 'red',
                            },
                        ]}
                        onPress={() => handleAnswerPress(option, currentQuestion.correctAnswer)}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    questionContainer: {
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        marginBottom: 10,
    },
    optionButton: {
        backgroundColor: "#4A3AFF",
        alignItems: "center",
        padding: 10,
        marginBottom: 20,
        borderRadius: 20,
    },
    optionText: {
        color: "#fff",
        fontWeight: "semibold",
        fontSize: 15,
    },
});

export default ExamPage;