import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxCounter from './components/ReduxCounter'
import { Provider } from 'react-redux'
import store from './stores'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ReduxCounter></ReduxCounter>
      </div>
      </Provider>
    );
  }
}

export default App;
