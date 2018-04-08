import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Login from '../Login';
import Register from '../Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
