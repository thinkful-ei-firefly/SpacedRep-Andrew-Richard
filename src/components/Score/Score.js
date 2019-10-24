import React from 'react';
import LanguageContext from '../../contexts/LanguageContext'

class Score extends React.Component {

    static contextType = LanguageContext

    render() {
        return(
            <div>
                <div className="totalscore">
                    Total Score:
                    <span>
                        { this.context.totalScore }
                    </span>
                </div>
                <h2>Translate the word:</h2>
                    <div className = "question-title">
                            <h3>{ this.context.currWord }</h3>
                            <div className = "score">
                                <span className = "correct">{ this.context.currCorrect }</span>
                                <span>:</span>
                                <span className = "incorrect">{ this.context.currIncorrect }</span>
                            </div>
                    </div>
            </div>
        )
    }
}

export default Score