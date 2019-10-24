import React from 'react';


const LanguageContext = React.createContext({
    page: 'ask',
    language: '',
    words: [],
    currWord: '',
    currAnswer: '',
    currCorrect: 0,
    currIncorrect: 0,
    totalScore: 0,
    choices: {},
    answerSelected: '',
    isCorrect: false,
    questionAClass: 'answer selected',
    questionBClass: 'answer',
    questionCClass: 'answer',
    questionDClass: 'answer',
    setLanguage: () => {},
    setWords: () => {},
    setCurrWord: () => {},
    setTotalScore: () => {},
    createWordList: () => {},
    createCorrectList: () => {},
    createIncorrectList: () => {},
    calcTotalScore: () => {},
    handleClickA: () => {},
    handleClickB: () => {},
    handleClickC: () => {},
    handleClickD: () => {},
    setChoices: () => {},
    handleGuess: () => {}
})

export default LanguageContext

export class LanguageProvider extends React.Component {
    constructor(props) {
        super(props)
        const state = {
            loading: true,
            page: 'ask', // /learning page ask = question, response = response
            language: '',
            words: [], // array of all word objects from the database
            currWord: '', // Word being asked translation
            currAnswer: '', // the currect translation
            currCorrect: 0, // how many times user has answered current word correctly
            currIncorrect: 0, // How many times the user has answered current word incorrectly
            totalScore: 0, // total number of correct answers stored in db table languages
            choices: {}, // possible answers to the translation
            answerSelected: '', // translation selected by the user
            isCorrect: false,
            questionAClass: 'answer selected',
            questionBClass: 'answer',
            questionCClass: 'answer',
            questionDClass: 'answer'
        }

        this.state = state;
    }

    setPage = page => {
        this.setState({ page })
    }

    setLanguage = language => {
        this.setState({ language })
    }

    setWords = words => {
        this.setState({ words })
    }

    setCurrWord = (word) => {
        this.setState({ 
            currWord: word.original,
            currAnswer: word.translation,
            currCorrect: word.correct_count,
            currIncorrect: word.incorrect_count,
        })
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

    handleClickA = e => {
        // update answerSelected and answers classNames
        this.setState({
            questionAClass: "answer selected",
            questionBClass: "answer",
            questionCClass: "answer",
            questionDClass: "answer",
            answerSelected: this.state.choices.A
        })
    }

    handleClickB = e => {
        // update answerSelected and answers classNames
        this.setState({
            questionAClass: "answer",
            questionBClass: "answer selected",
            questionCClass: "answer",
            questionDClass: "answer",
            answerSelected: this.state.choices.B
        })
    }

    handleClickC = e => {
        // update answerSelected and answers classNames
        this.setState({ 
            questionAClass: "answer",
            questionBClass: "answer",
            questionCClass: "answer selected",
            questionDClass: "answer",
            answerSelected: this.state.choices.C
        })
    }

    handleClickD = e => {
        // update answerSelected and answers classNames
        this.setState({ 
            questionAClass: "answer",
            questionBClass: "answer",
            questionCClass: "answer",
            questionDClass: "answer  selected",
            answerSelected: this.state.choices.D
        })
    }

    setChoices = () => {
        const ans = this.state.currAnswer;
        // get three random answers
        let otherAnswers = this.shuffle(
            [
                'Yes',
                'No',
                'Please',
                'Thank you',
                "You're welcome",
                'Hello',
                'Friend',
                'Excuse me',
                'I am sorry',
                'Good morning',
                'Good evening',
                'Goodnight',
                'How are you?',
                'Do you speak English?'
            ]
        )
        otherAnswers = otherAnswers.filter(translation => translation !== this.state.currAnswer)
        let choicesArr = [
            ans,
            otherAnswers[0], 
            otherAnswers[1], 
            otherAnswers[2]
        ]
        // randomize the order
        choicesArr = this.shuffle(choicesArr);
        const choices = {
            A: choicesArr[0],
            B: choicesArr[1],
            C: choicesArr[2],
            D: choicesArr[3]
        }
        this.setState({ 
            choices
        })
    }

    shuffle = (arr) => {
        let currIndex = arr.length
        let temp
        let randIndex
      
        while (0 !== currIndex) {
      
          randIndex = Math.floor(Math.random() * currIndex);
          currIndex -= 1;
      
          temp = arr[currIndex];
          arr[currIndex] = arr[randIndex];
          arr[randIndex] = temp;
        }
      
        return arr;
    }

    handleGuess = (guess) => {
        this.setState({
            isCorrect: guess.isCorrect,
            totalScore: guess.totalScore,
            currCorrect: guess.wordCorrectCount,
            currIncorrect: guess.wordIncorrectCount,
        })
    }

    /*
        answer,
        isCorrect,
        nextWord,
        totalScore,
        wordCorrectCount,
        wordIncorrectCount,
     */

    render() {
        const value = {
            page: this.state.page,
            language: this.state.language,
            words: this.state.words,
            currWordId: this.state.currWordId,
            currWord: this.state.currWord,
            currAnswer: this.state.currAnswer,
            currCorrect: this.state.currCorrect,
            currIncorrect: this.state.currIncorrect,
            totalScore: this.state.totalScore,
            choices: this.state.choices,
            answerSelected: this.state.answerSelected,
            isCorrect: this.state.isCorrect,
            questionAClass: this.state.questionAClass,
            questionBClass: this.state.questionBClass,
            questionCClass: this.state.questionCClass,
            questionDClass: this.state.questionDClass,

            setLanguage: this.setLanguage,
            setWords: this.setWords,
            setCurrWord: this.setCurrWord,
            setTotalScore: this.setTotalScore,
            createWordList: this.createWordlist,
            createCorrectList: this.createCorrectList,
            createIncorrectList: this.createIncorrectList,
            calcTotalScore: this.calcTotalScore,
            handleClickA: this.handleClickA,
            handleClickB: this.handleClickB,
            handleClickC: this.handleClickC,
            handleClickD: this.handleClickD,
            setChoices: this.setChoices,
            handleGuess: this.handleGuess
        }

        return(
            <LanguageContext.Provider value={ value }>
                { this.props.children }
            </LanguageContext.Provider>
        )

    }
}