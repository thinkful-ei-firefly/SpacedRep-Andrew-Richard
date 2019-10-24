import React from 'react';
//import components
import { Label } from '../Form/Form'
import Button from '../Button/Button'
// import context
import LanguageContext from '../../contexts/LanguageContext'
//import services
import LanguageApiService from '../../services/language-api-service'


class Question extends React.Component {

    static contextType = LanguageContext

    state = {
        loading: true
    }

    // page rotates ask, response
    // ask = question is loaded
    // response = loads answer, choice and if right wrond
    // with a button to go to the next question

    componentDidMount() {

            LanguageApiService.getHead()
                .then(( results ) => {
                        //update currWord
                        this.context.setCurrWord(results.wordObj)
                        //update totalScore
                        this.context.setTotalScore(results.totalScore)
                    }
                )
                .then(() => {
                    this.context.setChoices()
                    this.context.handleClickA()
                })
                .then(() => 
                this.setState({ 
                    loading: false 
                })
                )

    }

    handleSubmit = e => {
        e.preventDefault();
        const guessContent = {
            currWord: this.context.currWord,
            guess: this.context.answerSelected
        }

        LanguageApiService.guess(guessContent)
            .then(guess => 
                this.context.handleGuess(guess)
            )
            .then(() => 
                this.props.updatePage('response')
            )
    }

    render() {
        if(this.state.loading) {
            return(
                <div className = "loading">
                    Loading . . .
                </div>
            )
        }
        else {
            return(
                <form 
                    className = "question"
                    onSubmit = { this.handleSubmit }>
                    <div className = "answers">
                    <Label
                            htmlFor = "answer-a selected">
                            <div
                                id = "answer-a"
                                type = "button"
                                className = { this.context.questionAClass }
                                onClick = { this.context.handleClickA }>
                                { this.context.choices.A }
                            </div>
                        </Label>
                        <Label
                            htmlFor = "answer-b">
                            <div
                                id = "answer-b"
                                type = "button"
                                className = { this.context.questionBClass }
                                onClick = { this.context.handleClickB }>
                                { this.context.choices.B }
                            </div>
                        </Label>
                        <Label
                            htmlFor = "answer-c">
                            <div
                                id = "answer-c"
                                type = "button"
                                className = { this.context.questionCClass }
                                onClick = { this.context.handleClickC }>
                                { this.context.choices.C }
                            </div>
                        </Label>
                        <Label
                            htmlFor = "answer-d">
                            <div
                                id = "answer-d"
                                type = "button"
                                className = { this.context.questionDClass }
                                onClick = { this.context.handleClickD }>
                                { this.context.choices.D }
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
            )
        }
    }
}

export default Question;

















/*
<Label
                                htmlFor = "answer-a">
                                <div
                                    id = "answer-a"
                                    type = "button"
                                    className = { this.context.questionAClass }
                                    value = { this.context.choices.A }
                                    onClick = { this.context.handleClickA }>
                                    { this.context.choices.A }
                                </div>
                            </Label>
                            <Label
                                htmlFor = "answer-b">
                                <div
                                    id = "answer-b"
                                    type = "button"
                                    className = { this.context.questionBClass }
                                    onClick = { this.context.handleClickB }>
                                    { this.context.choices.B }
                                </div>
                            </Label>
                            <Label
                                htmlFor = "answer-c">
                                <div
                                    id = "answer-c"
                                    type = "button"
                                    className = { this.context.questionCClass }
                                    onClick = { this.context.handleClickC }>
                                    { this.context.choices.C }
                                </div>
                            </Label>
                            <Label
                                htmlFor = "answer-d">
                                <div
                                    id = "answer-d"
                                    type = "button"
                                    className = { this.context.questionDClass }
                                    onClick = { this.context.handleClickD }>
                                    { this.context.choices.D }
                                </div>
                            </Label>
*/
/*
<Label
                                htmlFor = "answer-a"
                                className = { this.context.questionAClass }>
                                <Input 
                                    id = "answer-a"
                                    type = "radio"
                                    value = { this.context.choices.A }
                                    onChange = { this.context.handleClickA }
                                    checked = { true }
                                    required>
                                </Input>
                                { this.context.choices.A }
                            </Label>
                            <Label
                                htmlFor = "answer-b"
                                className = { this.context.questionBClass }>
                                <Input 
                                    id = "answer-b"
                                    type = "radio"
                                    value = { this.context.choices.B }>
                                </Input>
                                { this.context.choices.B }
                            </Label>
                            <Label
                                htmlFor = "answer-c"
                                className = { this.context.questionCClass }>
                                <Input 
                                    id = "answer-c"
                                    type = "radio"
                                    value = { this.context.choices.C }>
                                </Input>
                                { this.context.choices.C }
                            </Label>
                            <Label
                                htmlFor = "answer-d"
                                className = { this.context.questionDClass }>
                                <Input 
                                    id = "answer-d"
                                    type = "radio"
                                    value = { this.context.choices.D }>
                                </Input>
                                { this.context.choices.D }
                            </Label>
 */