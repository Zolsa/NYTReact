import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main}/>
        </div>
      </Router>
    );
  }
}

export default App;