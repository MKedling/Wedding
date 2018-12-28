import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Wedding from "./pages/Wedding";
import Party from "./pages/Party";

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';




class App extends Component {

  state = {
    sideDrawerOpen: false,
    navLinks : [
      {to: '/',           displayName: 'Hem'},
      {to: '/program',    displayName: 'Program'},
      {to: '/wedding',    displayName: 'Vigsel'},
      {to: '/party',      displayName: 'Fest'}
    ]
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {

    const links = this.state.navLinks.map((link) =>
      <li className="nav-item">
        <Link key={link.key} to={link.to} className="nav-link">{link.displayName}</Link>
      </li>);

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <div className="row">
              <Toolbar drawerClickHandler={this.drawerToggleClickHandler} links={links}/>
            </div>
            <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler} links={links}/>

            <main className="row">
              <Route exact path="/" component={Home}/>
              <Route path="/program" component={Program}/>
              <Route path="/wedding" component={Wedding}/>
              <Route path="/party" component={Party}/>
            </main>

          </div>
        </Router>
        {backdrop}

      </div>
    );
  }
}

export default App;

