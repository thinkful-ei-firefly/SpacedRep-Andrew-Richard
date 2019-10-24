import React from 'react';
import LanguageContext from '../../contexts/LanguageContext'
import Button from '../Button/Button'


class Incorrect extends React.Component {

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
        this.context.handleClickA()
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
        else {
            return(
                <section className = "response">
                    <div>
                        <p>Good try, but not quite right :(</p>
                        <p>You chose "{ this.context.answerSelected }" and</p>
                        <p>the correct answer is "{ this.context.currAnswer }"</p>
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

export default Incorrect;