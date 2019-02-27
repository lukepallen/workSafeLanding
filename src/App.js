import React, { Component } from 'react';
import './App.scss';
import LandingPage from './LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Banner">
          <p>workSafe</p>
        </div>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
