import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  buildSquares() {
    let anotherarr = new Array(10).fill().map((c, i) => <div className="square">Hello</div>)
    return anotherarr
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Swoosh</h2>
        </div>
        <div className="container">
          {this.buildSquares()}
        </div>
      </div>
    );
  }
}

export default App;
