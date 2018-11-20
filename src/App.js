import React, { Component } from 'react';
import Sidebar from './components/Sidebar.js';
import Map from './components/Map.js';
import './App.css';

class App extends Component {

  state = {
    locations: []
  }
  
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Map />
      </div>
    );
  }
}

export default App;
