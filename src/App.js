import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Home from './views/home/home';

import todoApp from './reducers'

class App extends Component {
  constructor(props){
    super(props);
    this.store = createStore(todoApp);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router history={browserHistory}>
          <h1>here</h1>
          <Route path="/" component={Home}>
            <Route path="about" component={Home}/>
            <Route path="users" component={Home}>
              <Route path="/user/:userId" component={Home}/>
            </Route>
            <Route path="*" component={Home}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
