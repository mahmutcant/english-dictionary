import { View, Text, TextInput, StyleSheet, Dimensions, Pressable, FlatList, ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { ClearIcon, HistoryIcon, SearchIcon } from '../../../Icons'
import { autoComplete, getInformationByWord } from '../../services/SearchService'
import debounce from "lodash.debounce";
import { AutoComplete, HistoryWordDetail, WordDetail } from '../../models/AutoComplete';
import SearchResultContainer from '../../common/SearchResultContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Search = () => {
    const [search, setSearch] = useState<string>("")
    const [searchResult, setSearchResult] = useState<AutoComplete[] | null>([]);
    const [isItemSelected, setIsItemSelected] = useState(true);
    const [selectedWord, setSelectedWord] = useState<string>("")
    const [wordDetail, setWordDetail] = useState<WordDetail>();
    const [history, setHistory] = useState<HistoryWordDetail>({})
    const [loading, setLoading] = useState<boolean>(false)
    const getHistory = async () => {
        try {
            const searchHistory = await AsyncStorage.getItem("search-history");
            if (searchHistory !== null) {
                setHistory(JSON.parse(searchHistory))
            }
        } catch (error) {
            console.error("Geçmiş Bilgisi Alınamadı", error);
        }
    }
    const saveHistory = async () => {
        if (wordDetail) {
            setHistory(prevHistory => ({
                [search]: wordDetail,
                ...history
            }));
        }
    }
    useEffect(() => {
        saveHistory()
    }, [wordDetail])

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
    const getInformation = (word: string) => {
        setLoading(true)
        getInformationByWord(word).then((data) => {
            setLoading(false)
            setWordDetail(data);
        }).catch(error => { setLoading(false); console.log(error); })
    }

    return (
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
            <ScrollView keyboardShouldPersistTaps="always">
                <View style={{ position: "relative", marginTop: 20 }}>
                    <TextInput value={search} onFocus={() => setIsItemSelected(false)} onChangeText={(text) => setSearch(text)} style={[styles.search, (isItemSelected || !searchResult) && { borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginBottom: 10 }]}
                        cursorColor="#000"></TextInput>
                    <View style={{ position: "absolute", marginTop: 42, marginLeft: 40 }}><SearchIcon /></View>
                    {search && <Pressable onPress={() => setSearch("")} style={{ position: "absolute", marginTop: 42, right: 50 }}><ClearIcon /></Pressable>}
                    {!isItemSelected && searchResult && <ScrollView style={styles.searchResultContainer}>
                        {searchResult.map((item) => (
                            <Pressable onPress={() => {
                                setIsItemSelected(true)
                                setSelectedWord(item.word)
                                getInformation(item.word)
                                setSearch(item.word)
                            }} style={styles.item} key={item.word}>
                                <Text>{item.word}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>}
                    {(loading) ? <ActivityIndicator size={70} color={"#999999"} /> : selectedWord && (
                        <SearchResultContainer selectedWord={selectedWord} wordDetail={wordDetail} isHistory={false}/>
                    )}
                </View>
                {history && <View style={{margin:50}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}><HistoryIcon/>
                    <Text style={{fontWeight:"bold",fontSize:20}}>Historical Searches</Text>
                    <View></View>
                    </View>
                    {Object.keys(history).filter(key => key && (key !== selectedWord)).map((key: string) =>
                        <SearchResultContainer selectedWord={key} wordDetail={history[key]} key={key} isHistory={true}/>
                    )}
                </View>}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Search

const styles = StyleSheet.create({
    search: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
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
        alignSelf: "center",
        elevation: 9,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: Dimensions.get("screen").width - 50,
        backgroundColor: "#fff",
        fontSize: 16
    },
    searchResultContainer: {
        width: Dimensions.get("screen").width - 50,
        alignSelf: "center",
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
    item: {
        padding: 20,
        backgroundColor: '#fff',
    },
})