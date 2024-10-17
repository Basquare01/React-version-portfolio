// src/components/Header.js
import React from 'react';
// import './Header.css'; // Optional if you want to modularize styles

const Header = ({ toggleMode }) => (
  <header>
    <div className="logo">
      <img src="/assets/dark-logo.jpg" alt="Logo" id="logo" />
    </div>
    <button className="toggle-mode" onClick={toggleMode}>Toggle Mode</button>
  </header>
);

export default Header;
