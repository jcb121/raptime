import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import Home from '../views/home/home';

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
        </Route>
      </Router>
    );
  }
}

export default App
