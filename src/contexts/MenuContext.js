import React from 'react';

const MenuContext = React.createContext({
  sideDrawerIsOpen: false,
  drawerClass: '',
  handleOpenSideDrawer: () => {},
  handleCloseSideDrawer: () => {}
});

export default MenuContext

export class MenuProvider extends React.Component {
    constructor(props) {

        super(props)

        const state = {
            sideDrawerIsOpen: false,
            drawerClass: 'side-drawer'
        }

        this.state = state;
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
          const value = {
              sideDrawerIsOpen: this.state.sideDrawerIsOpen,
              drawerClass: this.state.drawerClass,
              handleOpenSideDrawer: this.handleOpenSideDrawer,
              handleCloseSideDrawer: this.handleCloseSideDrawer
          }
          return(
              <MenuContext.Provider value={ value }>
                  { this.props.children }
              </MenuContext.Provider>
          )
      }
}

