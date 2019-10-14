import React from 'react';
import { Link } from 'react-router-dom';
// import components
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
// import context
import UserContext from '../../contexts/UserContext';
import MenuContext from '../../contexts/MenuContext';
// import service functions
import TokenService from '../../services/token-service';
// import css
import './sideDrawer.css'

class SideDrawer extends React.Component {

    static contextType = UserContext;
    static contextType = MenuContext;

    handleLinkClicked = () => {
        this.context.close();
    }

    renderLogoutLink() {
        return (
          <div className="sidebar-navigation-items">
              <ul>
                <li>
                  <span>
                    {this.context.user.name}
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
          <div className="sidebar-navigation-items">
            <ul>
              <li>
                <Link 
                  to='/login'
                  className="menu"
                  onClick = { this.handleLinkClicked }>
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to='/register'
                  className="menu"
                  onClick = { this.handleLinkClicked }>
                  Sign up
                </Link>
              </li> 
            </ul>
          </div>
        )
      }
    
      render() {
        return (
            <nav className={ this.context.drawerClass }>
    
              {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
              
            </nav>
        );
      }
    
}

export default SideDrawer