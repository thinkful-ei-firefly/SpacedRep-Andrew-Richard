import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// import Routes
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute'
import LearningRoute from '../../routes/LearningRoute/LearningRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
// import addition components
import Header from '../Header/Header'
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';
import MenuContext from '../../contexts/MenuContext';
// import css

export default class App extends Component {

  static contextType = MenuContext;

  state = { 
    hasError: false,
    sideDrawerIsOpen: false,
    drawerClass: 'side-drawer',
   }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  handleOpenSideDrawer = () => {
    this.setState({
      sideDrawerIsOpen: true,
      drawerClass: 'side-drawer is-open'
    })
  }

  handleCloseSideDrawer = () => {
    this.setState({
      sideDrawerIsOpen: false,
      drawerClass: 'side-drawer'
    })
  }

  render() {

    let backDrop;
    if(this.state.sideDrawerIsOpen) {
      backDrop = <BackDrop click = { this.handleCloseSideDrawer } />
    }

    const { hasError } = this.state
    return (
      <div className='App' style={ { height: '100%' }}>
        
        <MenuContext.Provider
          value = { {
            sideDrawerIsOpen: this.state.sideDrawerIsOpen,
            drawerClass: this.state.drawerClass,
            open: this.handleOpenSideDrawer,
            close: this.handleCloseSideDrawer
          }}>

          <Header />
          <SideDrawer />
          { backDrop }

      </MenuContext.Provider>

        <main style={ { marginTop: '64px' } }>
          {hasError && (
            <p>There was an error! Oh no!</p>
          )}
          <Switch>
            <PrivateRoute
              exact
              path={'/'}
              component={DashboardRoute}
            />
            <PrivateRoute
              path={'/learn'}
              component={LearningRoute}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationRoute}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginRoute}
            />
            <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
