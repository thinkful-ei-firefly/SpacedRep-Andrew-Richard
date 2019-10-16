import React from 'react';
//import components
import { Label, Input } from '../Form/Form'
import Button from '../Button/Button'
// import context
import LanguageContext from '../../contexts/LanguageContext'
//import services
import LanguageApiService from '../../services/language-api-service'


class Question extends React.Component {

    static contextType = LanguageContext

    componentDidMount() {
        console.log('mounted Question')
            LanguageApiService.getHead()
                .then((
                    {
                        nextWord,
                        wordCorrectCount,
                        wordIncorrectCount,
                        totalScore
                    }) => {
                        //update currWord
                        this.context.setCurrWord(nextWord)
                        //update currCorrect
                        this.context.setCurrCorrect(wordCorrectCount)
                        //update currIncorrect
                        this.context.setCurrIncorrect(wordIncorrectCount)
                        //update totalScore
                        this.context.setTotalScore(totalScore)
                    }
                )
                .then(() => {
                    this.setState({ loading: false })
                  })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('form submitted')
    }

    render() {
        if(this.context.loading) {
            return(
                <div>
                    Loading . . .
                </div>
            )
        }
        else {
            return(
                <div>
                    <h2>Translate the word:</h2>
                    <form 
                        className="question"
                        onSubmit = { this.handleSubmit }>
                        <div className="question-title">
                            <h3>{ this.context.currWord }</h3>
                            <div className="score">
                                <span className="correct">{ this.context.currCorrect }</span>
                                <span>:</span>
                                <span className="incorrect">{ this.context.currIncorrect }</span>
                            </div>
                        </div>
                        <div className="answers">
                            <Label
                                htmlFor="answer-a">
                                <div
                                    id="answer-a"
                                    type="button"
                                    className={ this.context.classNameA }
                                    onClick = { this.context.handleClickA }>
                                    A
                                </div>
                            </Label>
                            <Label
                                htmlFor="answer-b">
                                <div
                                    id="answer-b"
                                    type="button"
                                    className={ this.context.classNameB }
                                    onClick ={ this.context.handleClickB }>
                                    B
                                </div>
                            </Label>
                            <Label
                                htmlFor="answer-c">
                                <div
                                    id="answer-c"
                                    type="button"
                                    className={ this.context.classNameC }
                                    onClick = { this.context.handleClickC }>
                                    C
                                </div>
                            </Label>
                            <Label
                                htmlFor="answer-d">
                                <div
                                    id="answer-d"
                                    type="button"
                                    className= { this.context.classNameD }
                                    onClick={ this.context.handleClickD }>
                                    D
                                </div>
                            </Label>
                        </div>
                        <div className="button">
                            <Button
                                type='submit'>
                                Check Answer
                            </Button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Question;