export interface AutoComplete {
    word: string
}

export interface WordDetail {
    example_sentences: string[],
    level: string,
    synonyms: string[]
    title: string
}

export interface HistoryWordDetail {
    [title: string]: WordDetail,
}