import React from 'react';
import "../App.css"

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero">Join the Local Sports Activity</div>
      <div className="hero-text">
        Connect with like-minded people in your locality and participate in various activities together.
      </div>
      <div className="hero-buttons">
        <button className="button-1">Learn More</button>
        <button className="button-2">Join Now</button>
      </div>
    </div>
  );
}

export default Hero;
