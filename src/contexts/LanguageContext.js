import React from 'react';


const LanguageContext = React.createContext({
    language: '',
    words: [],
    currWord: '',
    currCorrect: 0,
    currIncorrect: 0,
    totalScore: 0,
    answerSelected: '',
    classNameA: '',
    classNameB: '',
    classNameC: '',
    classNameD: '',
    setLanguage: () => {},
    setWords: () => {},
    setCurrWord: () => {},
    setCurrCorrect: () => {},
    setCurrIncorrect: () => {},
    setTotalScore: () => {},
    createWordList: () => {},
    createCorrectList: () => {},
    createIncorrectList: () => {},
    calcTotalScore: () => {},
    handleClickA: () => {},
    handleClickB: () => {},
    handleClickC: () => {},
    handleClickD: () => {},
})

export default LanguageContext

export class LanguageProvider extends React.Component {
    constructor(props) {
        super(props)
        const state = {
            loading: true,
            language: '',
            words: [],
            currWord: '',
            currCorrect: 0,
            currIncorrect: 0,
            totalScore: 0,
            answerSelected: '',
            classNameA: 'answer',
            classNameB: 'answer',
            classNameC: 'answer',
            classNameD: 'answer'
        }

        this.state = state;
    }

    setLanguage = language => {
        this.setState({ language })
    }

    setWords = words => {
        this.setState({ words })
    }

    setCurrWord = (currWord) => {
        this.setState({ 
            currWord
        })
    }

    setCurrCorrect = currCorrect => {
        this.setState({ currCorrect })
    }

    setCurrIncorrect = currIncorrect => {
        this.setState({ currIncorrect })
    }

    setTotalScore = totalScore => {
        this.setState({ totalScore })
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

    calcTotalScore = () => {
        return this.state.words
            .reduce(function(acc, word) {
                return acc + word.correct_count
            }, 0)
    }

    handleClickA = () => {
        console.log('A selected')
        // update answerSelected and answers classNames
        this.setState({ 
            answerSelected: 'A', 
            classNameA: 'selected answer',
            classNameB: 'answer',
            classNameC: 'answer',
            classNameD: 'answer'
        })
    }

    handleClickB = () => {
        console.log('B selected')
        // update answerSelected and answers classNames
        this.setState({ 
            answerSelected: 'B', 
            classNameA: 'answer',
            classNameB: 'selected answer',
            classNameC: 'answer',
            classNameD: 'answer'
        })
    }

    handleClickC = () => {
        console.log('C selected')
        // update answerSelected and answers classNames
        this.setState({ 
            answerSelected: 'C', 
            classNameA: 'answer',
            classNameB: 'answer',
            classNameC: 'selected answer',
            classNameD: 'answer'
        })
    }

    handleClickD = () => {
        console.log('D selected')
        // update answerSelected and answers classNames
        this.setState({ 
            answerSelected: 'D', 
            classNameA: 'answer',
            classNameB: 'answer',
            classNameC: 'answer',
            classNameD: 'selected answer'
        })
    }

    render() {
        const value = {
            language: this.state.language,
            words: this.state.words,
            currWordId: this.state.currWordId,
            currWord: this.state.currWord,
            currCorrect: this.state.currCorrect,
            currIncorrect: this.state.currIncorrect,
            totalScore: this.state.totalScore,
            answerSelected: this.state.answerSelected,
            classNameA: this.state.classNameA,
            classNameB: this.state.classNameB,
            classNameC: this.state.classNameC,
            classNameD: this.state.classNameD,
            setLanguage: this.setLanguage,
            setWords: this.setWords,
            setCurrWord: this.setCurrWord,
            setCurrCorrect: this.setCurrCorrect,
            setCurrIncorrect: this.setCurrIncorrect,
            setTotalScore: this.setTotalScore,
            createWordList: this.createWordlist,
            createCorrectList: this.createCorrectList,
            createIncorrectList: this.createIncorrectList,
            calcTotalScore: this.calcTotalScore,
            handleClickA: this.handleClickA,
            handleClickB: this.handleClickB,
            handleClickC: this.handleClickC,
            handleClickD: this.handleClickD,
        }

        return(
            <LanguageContext.Provider value={ value }>
                { this.props.children }
            </LanguageContext.Provider>
        )

    }
}