import React, { Component } from 'react'
// import components
import Question from '../../components/Question/Question'
// import contexts
import LanguageContext from '../../contexts/LanguageContext'
// import css
import './learningRoute.css'
class LearningRoute extends Component {

  static contextType = LanguageContext

  render() {
    return (
      <section className="learning">
        <div className="totalscore">
          Total Score:
          <span>
            { this.context.totalScore }
          </span>
        </div>
        <Question />
      </section>
    );
  }
}

export default LearningRoute
