import React, { Component } from 'react'
// import components
import Score from '../../components/Score/Score'
import Question from '../../components/Question/Question'
import Correct from '../../components/Correct/Correct'
import Incorrect from '../../components/Incorrect/Incorrect'
// import contexts
import LanguageContext from '../../contexts/LanguageContext'
// import css
import './learningRoute.css'

class LearningRoute extends Component {

    static contextType = LanguageContext

    state = {
        page: 'ask'
    }

    updatePage = page => {
        this.setState({
            page
        })
    }

    render() {

        if(this.state.page === 'ask') {
            return (
                <section className="learning">
                    <Score />
                    <Question updatePage = { this.updatePage } />
                </section>
            );
        }
        else if(this.state.page === 'response' && this.context.isCorrect) {
                
            return (
                <section className="learning">
                    <Score />
                    <Correct updatePage = { this.updatePage } />
                </section>
            )
        }
        else if(this.state.page === 'response' && !this.context.isCorrect) {
            return (
                <section className="learning">
                    <Score />
                    <Incorrect updatePage = { this.updatePage } />
                </section>
            )
        }
    }
}

export default LearningRoute
