import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Wedding from "./pages/Wedding";
import Party from "./pages/Party";

class App extends Component {
  render() {
    return (

        <Router>
          <div>

            <Navbar/>

            <Route exact path="/" component={Home} />
            <Route path="/program" component={Program} />
            <Route path="/wedding" component={Wedding} />
            <Route path="/party" component={Party} />
          </div>
        </Router>


    );
  }
}

export default App;
