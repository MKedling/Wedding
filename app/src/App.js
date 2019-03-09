import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./pages/Home";
import Practical from "./pages/Practical";
import Wedding from "./pages/Wedding";
import Party from "./pages/Party";

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


// https://icons8.com/icon/set/party/ios
import imageMap from './images/notUsed/icons8-treasure-map-100.png';
import imageParty from './images/icons8-party-balloons-96.png';
import imageAgenda from './images/icons8-checklist-128.png';
import imageWedding from './images/icons8-ring-96.png';
import ourHistory from './images/icons8-time-machine-96.png';
import History from "./pages/History";


class App extends Component {

  state = {
    sideDrawerOpen: false,
    navLinks : [
      {to: '/',           displayName: 'Hem', image: imageMap, name: "home"},
      {to: '/practical',    displayName: 'Praktiskt', image: imageAgenda, name: "practical"},
      {to: '/wedding',    displayName: 'Vigsel', image: imageWedding, name: "wedding"},
      {to: '/party',      displayName: 'Fest', image: imageParty, name: "party"},
      {to: '/history',      displayName: 'Vår Historia', image: ourHistory, name: "history"}
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
                <Route path="/practical" component={Practical}/>
                <Route path="/wedding" component={Wedding}/>
                <Route path="/party" component={Party}/>
                <Route path="/history" component={History}/>
            </main>

          </div>
        </Router>
        {backdrop}

      </div>
    );
  }
}

export default App;

