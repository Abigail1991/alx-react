import React from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} alt="Holberton School Logo" />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;
