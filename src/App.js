import React, { Component } from 'react';
import Cards from './components/Cards/Cards';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Cards />
      </div>
    );
  }
}

export default App;
