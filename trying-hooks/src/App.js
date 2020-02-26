import React from 'react';
import BasicHook from './components/BasicHook';
import UseEffect from './components/UseEffect';
import MaterialDesign from './components/MaterialDesign';
import MDGrid from './components/MDGrid';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MaterialDesign />
        <MDGrid />
        <BasicHook />
        <UseEffect />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
