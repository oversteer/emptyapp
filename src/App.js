import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The live version of the application will be available on Tuesday 2nd July 2019.<br />
            Apologies for any inconvenience.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
