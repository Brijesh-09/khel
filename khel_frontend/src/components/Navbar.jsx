import React from 'react';
import "../App.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path-to-your-logo" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        {/* <a href="/activities">Activities</a> */}
        <a href="#about">About</a>
        {/* <a href="/contact">Contact</a> */}
      </div>
      <div className="navbar-actions">
        <button className="action-btn primary">Join Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
