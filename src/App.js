import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = 'lookit'>
          <h1>LookIt</h1>
          </div>
          <SearchBar/>
        
        
      </div>
    );
  }
}

export default App;
