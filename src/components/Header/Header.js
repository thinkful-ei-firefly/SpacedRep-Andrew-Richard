import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className="navigation-items">
          <ul>
            <li>
              <span>
                { this.context.user.name }
              </span>
            </li>
            <li>
              <Link
                onClick={this.handleLogoutClick}
                to='/login'
                className="menu">
                Logout
              </Link>
            </li>
          </ul>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className="navigation-items">
        <ul>
          <li>
            <Link 
              to='/login'
              className="menu">
              Login
            </Link>
          </li>
          <li>
            <Link 
              to='/register'
              className="menu">
              Sign up
            </Link>
          </li> 
        </ul>
      </div>
    )
  }

  render() {
    return (
      <header className="header">
        <nav className="navigation">
          
          <div className="toggle-button">
            <DrawerToggleButton />
          </div>

          <h1 className="logo">
            <Link to='/'>
              Spaced Repetition
            </Link>
          </h1>

          <div className="spacer"></div>

          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          
        </nav>
      </header>
    );
  }
}

export default Header
