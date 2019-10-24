import React from 'react';
import { Link } from 'react-router-dom';
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

    handleLogoutClick = () => {
      this.context.handleCloseSideDrawer()
      this.context.processLogout()
    }

    renderLogoutLink() {
        return (
          <div className="sidebar-navigation-items">
              <ul>
                <li>
                  <span className="menu">
                    Add User Name
                    {/* {this.context.user.name} */}
                  </span>
                </li>
                <li>
                  <Link
                    to='/'
                    className="menu"
                    onClick = { this.context.handleCloseSideDrawer }>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={ this.context.handleCloseSideDrawer }
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
                  onClick = { this.context.handleCloseSideDrawer }>
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to='/register'
                  className="menu"
                  onClick = { this.context.handleCloseSideDrawer }>
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