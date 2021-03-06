import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Life from './Life.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Conway's Game of Life</h2>
        </div>
        <p className="App-intro">
          The grid below shows the current world state:
        </p>
        <Life />
      </div>
    );
  }
}

export default App;
