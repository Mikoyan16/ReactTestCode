import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "BB-8">
        <div class="message">
          <h2>move mouse or tap.</h2>
        </div>
        <div class="sand"></div>
        <div class="bb8">
          <div class="antennas">
            <div class="antenna short"></div>
            <div class="antenna long"></div>
          </div>
          <div class="head">
            <div class="stripe one"></div>
            <div class="stripe two"></div>
            <div class="eyes">
              <div class="eye one"></div>
              <div class="eye two"></div>
            </div>
            <div class="stripe three"></div>
          </div>
          <div class="ball">
            <div class="lines one"></div>
            <div class="lines two"></div>
            <div class="ring one"></div>
            <div class="ring two"></div>
            <div class="ring three"></div>
          </div>
          <div class="shadow"></div>
        </div>
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
