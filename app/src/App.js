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


// https://icons8.com/icon/set/party/ios
import imageMap from './images/icons8-treasure-map-100.png';
import imageParty from './images/icons8-party-balloons-100.png';
import imageAgenda from './images/icons8-checklist-100.png';
import imageWedding from './images/kyrka.jpg';


class App extends Component {

  state = {
    sideDrawerOpen: false,
    navLinks : [
      {to: '/',           displayName: 'Hem', image: imageMap},
      {to: '/program',    displayName: 'Program', image: imageAgenda},
      {to: '/wedding',    displayName: 'Vigsel', image: imageWedding},
      {to: '/party',      displayName: 'Fest', image: imageParty}
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

    const links = this.state.navLinks.map((link) => <Link key={link.key} to={link.to} className="nav-link">{link.displayName}</Link>);

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="">
        <Router>
          <div>
            <div className="">
              <Toolbar drawerClickHandler={this.drawerToggleClickHandler} links={links}/>
            </div>
            <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler} links={links}/>

            <main className="">

                <Route exact path="/"  render={(props) => <Home {...props} navLinks={this.state.navLinks} />} />
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

