import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import components
import WordsList from '../../components/WordsList/WordsList'
// import context
import LanguageContext from '../../contexts/LanguageContext'
// import services
import LanguageApiService from '../../services/language-api-service'
// import css
import './dashboardRoute.css'

class DashboardRoute extends Component {
  
  static contextType = LanguageContext;
  
  componentDidMount() {
    LanguageApiService.getLanguage()
      .then( results => {
          this.context.setLanguage(results.language)
          this.context.setWords(results.words)
      })
      .then(() => {
        this.setState({ loading: false })
      })
  }

  render() {
    if(this.context.loading)
      return(
        <div className="loading">
          Loading
        </div>
      )
    else
      return (
        <section className="dashBoard">
          <div className="subheader">
            <h2 className="language">{ this.context.language.name }</h2>
            <Link
              to='/learn'
              className="button">
              Start
            </Link>
          </div>
          <p className="totalScore">Total Score: { this.context.calcTotalScore() }</p>
          <WordsList />
        </section>
      );
  }
}

export default DashboardRoute
