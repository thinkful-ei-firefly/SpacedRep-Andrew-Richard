import React from 'react';


const LanguageContext = React.createContext({
    language: '',
    words: [],
    setLanguage: () => {},
    setWords: () => {},
    createWordList: () => {},
    createCorrectList: () => {},
    createIncorrectList: () => {}
})

export default LanguageContext

export class LanguageProvider extends React.Component {
    constructor(props) {
        super(props)
        const state = {
            loading: true,
            language: '',
            words: []
        }

        this.state = state;
    }

    setLanguage = language => {
        this.setState({ language })
    }

    setWords = words => {
        this.setState({ words })
    }

    createWordlist = () => {
        return this.state.words
            .map(word =>
                <div key={ word.id } className="word">
                    { word.original }
                </div>
            )
    }

    createCorrectList = () => {
        return this.state.words
            .map(word =>
                <div key={ word.id } className="correct">
                    { word.correct_count }
                </div>
                )
    }

    createIncorrectList = () => {
        return this.state.words
            .map(word =>
                <div key={ word.id } className="incorrect">
                    { word.incorrect_count }
                </div>
                )
    }

    render() {
        const value = {
            language: this.state.language,
            words: this.state.words,
            setLanguage: this.setLanguage,
            setWords: this.setWords,
            createWordList: this.createWordlist,
            createCorrectList: this.createCorrectList,
            createIncorrectList: this.createIncorrectList
        }

        return(
            <LanguageContext.Provider value={ value }>
                { this.props.children }
            </LanguageContext.Provider>
        )

    }
}