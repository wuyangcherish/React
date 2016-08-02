import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          这是第一个使用 create-react-app 做的一个小demo
        </p>
        <p className="App-intro">
          可是实时刷新的哦~
        </p>
      </div>
    );
  }
}

export default App;
