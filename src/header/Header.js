import React from 'react';
import logo from '../images/logo.png';
import './header.css'

function header() {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} className="header-image" />
        <p className="header-paragraph">my travel journal.</p>
      </div>
    </header>
  )
}

export default header