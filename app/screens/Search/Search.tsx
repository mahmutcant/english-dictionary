import { View, Text, TextInput, StyleSheet, Dimensions, Pressable, FlatList, ScrollView, TouchableHighlight } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SearchIcon } from '../../../Icons'
import { autoComplete, getInformationByWord } from '../../services/SearchService'
import debounce from "lodash.debounce";
import { AutoComplete, WordDetail } from '../../models/AutoComplete';

const Search = () => {
    const [search, setSearch] = useState<string>("")
    const [searchResult, setSearchResult] = useState<AutoComplete[] | null>([]);
    const [isItemSelected, setIsItemSelected] = useState(true);
    const [selectedWord, setSelectedWord] = useState<string>("")
    const [wordDetail, setWordDetail] = useState<WordDetail>();
    const debouncedSearch = useCallback(
        debounce((searchTerm) => {
            autoComplete(searchTerm)
                .then((data) => {
                    setSearchResult(data);
                })
                .catch((error) => console.log(error));
        }, 500), []);

    useEffect(() => {
        if (search.length > 2) {
            debouncedSearch(search);
        }
        else {
            setSearchResult(null)
        }
    }, [search]);
    const getInformation = (word:string) => {
        getInformationByWord(word).then((data) => {
            setWordDetail(data);
        }).catch(error => console.log(error))
    }
    return (
        <ScrollView>
            <View style={{ position: "relative", marginTop: 20 }}>
            <TextInput value={search} onFocus={() => setIsItemSelected(false)} onChangeText={(text) => setSearch(text)} style={[styles.search, (isItemSelected || !searchResult) && { borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }]}
                cursorColor="#000"></TextInput>
            <View style={{ position: "absolute", marginTop: 17, marginLeft: 15 }}><SearchIcon /></View>
            {!isItemSelected && searchResult && <ScrollView style={styles.searchResultContainer}>
                {searchResult.map((item) => (
                    <Pressable onPress={() => {
                        setIsItemSelected(true)
                        setSelectedWord(item.word)
                        getInformation(item.word)
                    }} style={styles.item}>
                        <Text>{item.word}</Text>
                    </Pressable> 
                ))}
            </ScrollView>}
            {selectedWord && (
                <View style={styles.selectedWordContainer}>
                    <View style={styles.selectedWordContext}>
                        <View style={{flexDirection: "row", justifyContent: "space-between",alignItems:"center"}}>
                            <Text style={{fontWeight:"bold",fontSize:20}}>{selectedWord}</Text>
                            {wordDetail?.level && <View style={{backgroundColor:"#FEC400",padding:10,borderRadius:40}}><Text style={{fontWeight:"900",fontSize:25}}>{wordDetail?.level}</Text></View>}
                        </View>
                        <Text style={{fontSize:20,marginTop:20}}>{wordDetail?.title.split(":")[0]}</Text>
                        {wordDetail?.example_sentences && (
                            <View style={{marginVertical:20}}>
                            <Text style={{fontWeight:"bold",fontSize:18}}>Example Sentences</Text>
                            {wordDetail?.example_sentences.map((item) => (
                                <Text style={{marginTop:10}}>{item}</Text>
                            ))}
                            </View>
                        )}
                        {wordDetail?.synonyms.map((item) => (
                            <View>
                                <Text>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            )}
        </View>
        </ScrollView>
    )
}

export default Search

const styles = StyleSheet.create({
    search: {
        marginVertical: 4,
        height: 50,
        borderWidth: 0.5,
        borderColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        paddingLeft: 50,
        elevation: 9,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10,
        width: Dimensions.get("screen").width - 20,
        backgroundColor: "#fff",
        fontSize: 16
    },
    searchResultContainer: {
        width: Dimensions.get("screen").width - 20,
        borderColor: "#fff",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 10
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
    },
    item: {
        padding: 20,
        backgroundColor: '#fff',
    },
    selectedWordContainer: {
        width: Dimensions.get("screen").width - 30,
        backgroundColor: "#fff",
        borderRadius: 30,
        borderWidth:2,
        borderColor: "#4A3AFF",
        marginTop: 30
    },
    selectedWordContext: {
        margin: 30
    }
})