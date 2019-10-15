import React from 'react'
import LanguageContext from '../../contexts/LanguageContext';

class WordsList extends React.Component {

    static contextType = LanguageContext

    renderWords() {
        return(
            <section className="wordsList">
                <div className="words">
                    <p>Words</p>
                    { this.context.createWordList() }
                </div>
                <div className="corrects">
                    <p>Correct</p>
                    { this.context.createCorrectList() }
                </div>
                <div className="incorrects">
                    <p>Incorrect</p>
                    { this.context.createIncorrectList() }
                </div>
            </section>
        )
    }

    render() {
        return (
            <div>
                { this.context.loading
                    ? `Loading . . .`
                    : this.renderWords()
                }
            </div>
        )
    }
}

export default WordsList