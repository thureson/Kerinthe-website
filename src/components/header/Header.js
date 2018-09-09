import React from 'react';
import './Header.css';

const Header = ({ name, children }) =>
  <div className="Header content-container">
    <div className="header-content">
      <div>
        <img
          className="header-logo"
          src="kerinthe.png"
          alt="Logo_Cardo_serif" />
      </div>
      <div style={{ flex: 1 }} />
      <div className="header-navigation">
        <button className="header-route">
          About
        </button>
        <button className="header-route">
          Contact
        </button>
      </div>
      <span> { name } </span>
      { children }
    </div>
  </div>

export default Header;
