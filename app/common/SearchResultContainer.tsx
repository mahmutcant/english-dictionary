import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WordDetail } from '../models/AutoComplete'
import { ArrowLeft, ArrowRight, ClearIcon } from '../../Icons';
import { FIREBASE_AUTH, FIRESTORE_RT_DB } from '../../FirebaseConfig';
import { ref, set } from 'firebase/database';
type SearchResultContainerProps = {
    selectedWord: string;
    wordDetail?: WordDetail;
    isHistory: boolean;
};
const SearchResultContainer: React.FC<SearchResultContainerProps> = ({selectedWord,wordDetail,isHistory}) => {
    const [indexOfExampleSentences, setIndexOfExampleSentences] = useState(0);
    
    const db = FIRESTORE_RT_DB;
    const auth = FIREBASE_AUTH;
    const handlePrevious = () => {
        if (indexOfExampleSentences > 0) {
            setIndexOfExampleSentences(indexOfExampleSentences - 1);
        }
    };

    const handleNext = () => {
        if (indexOfExampleSentences < wordDetail!.example_sentences.length - 1) {
            setIndexOfExampleSentences(indexOfExampleSentences + 1);
        }
    };
    const saveToWordList = () => {
        console.log(auth.currentUser?.uid);
        set(ref(db, 'users/' + auth.currentUser?.uid + "/education_context/" + selectedWord), {
            word: wordDetail?.title.split(":")[0],
            level: wordDetail?.level
        }).then(() => {

        }).catch((err: any) => console.log(err))
    }
    return (
        wordDetail && (
            <View style={styles.selectedWordContainer}>
                {isHistory && <View style={{alignSelf:"flex-end",margin:10}}>
                    <ClearIcon/>
                </View>}
            <View style={styles.selectedWordContext}>
                
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{selectedWord}</Text>
                    {wordDetail?.level && <View style={{ backgroundColor: "#FEC400", padding: 10, borderRadius: 40 }}><Text style={{ fontWeight: "900", fontSize: 25 }}>{wordDetail?.level}</Text></View>}
                </View>
                <Text style={{ fontSize: 20, marginTop: 20 }}>{wordDetail?.title.split(":")[0]}</Text>
                {wordDetail?.example_sentences && wordDetail!.example_sentences.length > 0 && (
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Example Sentences</Text>
                        <View style={styles.container}>
                            <Pressable onPress={handlePrevious}>
                                <ArrowLeft />
                            </Pressable>
                            <Text style={styles.text}>{wordDetail?.example_sentences[indexOfExampleSentences]}</Text>
                            <Pressable onPress={handleNext}>
                                <ArrowRight />
                            </Pressable>
                        </View>
                    </View>
                )}
            </View>
            
            <Pressable onPress={saveToWordList}>
                <View style={{ justifyContent: "center", alignItems: "center", margin: 10, padding: 10, backgroundColor: "#4A3AFF", borderRadius: 50 }}>
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>Add to word list</Text>
                </View>
            </Pressable>
        </View>
        )
    )
}

export default SearchResultContainer

const styles = StyleSheet.create({
    selectedWordContainer: {
        width: Dimensions.get("screen").width - 50,
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#4A3AFF",
        marginTop: 30
    },
    selectedWordContext: {
        margin: 30
    },
    container: {
        flexDirection: 'row',
        width: Dimensions.get('screen').width - 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20
    },
    text: {
        marginHorizontal: 10,
        textAlign: 'center',
        flex: 1,
    },
})