import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, Pressable } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { FIREBASE_AUTH, FIRESTORE_RT_DB } from '../../../FirebaseConfig';

interface WordDetail {
    level: string;
    word: string;
    means: string[]
}

interface EducationContextModel {
    [key: string]: WordDetail;
}

const ExamPage = () => {
    const [educationContext, setEducationContext] = useState<EducationContextModel | undefined>(undefined);
    const [questions, setQuestions] = useState<{ question: string, options: string[], correctAnswer: string }[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
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
            const means = data[key].means ?? [];

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

            const questionType3 = means.length > 0 ? {
                question: `${key} kelimesinin anlamı nedir?`,
                options: shuffleArray([means[0], ...getRandomMeans(data, key, 3)]),
                correctAnswer: means[0],
            } : null;

            const questionType4 = means.length > 0 ? {
                question: `${means[0]} anlamına gelen İngilizce kelime nedir?`,
                options: shuffleArray([key, ...getRandomKeys(keys, key, 3)]),
                correctAnswer: key,
            } : null;

            return questionType3 && questionType4 ? [questionType1, questionType2, questionType3, questionType4] : [questionType1, questionType2];
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

    const getRandomMeans = (data: EducationContextModel, excludeKey: string, count: number) => {
        const means = Object.entries(data)
            .filter(([key, detail]) => key !== excludeKey)
            .flatMap(([key, detail]) => detail.means ?? []);
        const shuffled = shuffleArray(means);
        return shuffled.slice(0, count);
    };

    const shuffleArray = (array: any[]) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const handleAnswerPress = (selectedOption: string, correctAnswer: string) => {
        setSelectedOption(selectedOption);
        setCorrectCount(selectedOption === correctAnswer ? (correctCount + 1) : correctCount);
        setWrongCount(selectedOption !== correctAnswer ? (wrongCount + 1) : wrongCount);

        setTimeout(() => {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null);
        }, 1000);
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setCorrectCount(0);
        setWrongCount(0);
        const generatedQuestions = generateQuestions(educationContext!);
        setQuestions(generatedQuestions);
    };

    if (currentQuestionIndex >= questions.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>Tebrikler, sınavı tamamladınız!</Text>
                <Text style={styles.question}>{correctCount} adet doğru cevap verdiniz</Text>
                <Text style={styles.question}>{wrongCount} adet yanlış cevap verdiniz</Text>
                <Button title="Baştan Başla" onPress={handleRestart} />
            </View>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        Object.keys(educationContext!).length > 3 ? (
            <View style={styles.container}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>{currentQuestion.question}</Text>
                    {currentQuestion.options.map((option, i) => (
                        <Pressable
                            key={i}
                            style={[
                                styles.optionButton,
                                selectedOption !== null && {
                                    backgroundColor:
                                        option === currentQuestion.correctAnswer
                                            ? 'green'
                                            : option === selectedOption
                                                ? 'red'
                                                : '#4A3AFF',
                                },
                            ]}
                            onPress={() => handleAnswerPress(option, currentQuestion.correctAnswer)}
                            disabled={selectedOption !== null}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>) : (<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                <Text>Sınav yapabilmek için içeriğinizde en az 4 kelime olmalıdır.</Text>
            </View>)
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
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
        padding: 20,
        marginBottom: 25,
        borderRadius: 20,
    },
    optionText: {
        color: "#fff",
        fontWeight: "semibold",
        fontSize: 15,
    },
});

export default ExamPage;