import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  buildSquares() {
    constructor(props) {
      super(props);
      this.state = { width: '0', height: '0' };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    let anotherarr = new Array(10000).fill().map((c, i) => <div key={i} className="square"></div>)
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
