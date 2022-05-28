import React from 'react';
import './header.css'

function header() {
  return (
    <header>
      <div className="header-logo">
        <img src={`./images/logo.png`} className="header-image" alt="logo" />
        <p className="header-paragraph">my travel journal.</p>
      </div>
    </header>
  )
}

export default header