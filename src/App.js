import React, { Component } from 'react';
import logo from './logo.svg';
import * as serviceWorker from './serviceWorker';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    serviceWorker.register({
      onUpdate: () => {
        console.log('[ ⛱has update! ]');
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload!
            <br />
            <strong>By FEI1234444!!!</strong>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
