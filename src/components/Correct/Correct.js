import React from 'react';
import LanguageContext from '../../contexts/LanguageContext'
import Button from '../Button/Button'


class Correct extends React.Component {

    static contextType = LanguageContext

    state = {
        loading: true
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.updatePage('ask')
    }

    render() {
        if(this.state.loading) {
            return (
                <div className = "loading">
                    Loading . . .
                </div>
            )
        }
        else if (this.context.isCorrect) {
            return(
                <section className = "response">
                    <div>
                        <p>You were correct! :D</p>
                    </div>
                    <Button
                        onClick = { this.handleClick }>
                        Next
                    </Button>
                </section>
            )
        }
    }
}

export default Correct;