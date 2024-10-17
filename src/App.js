// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Videos from './components/Videos';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode';
  };

  return (
    <div className="App">
      <Header toggleMode={toggleMode} />
      <div className="container">
        <Intro />
        <Videos />
      </div>
      <Portfolio />
    </div>
  );
}

export default App;
