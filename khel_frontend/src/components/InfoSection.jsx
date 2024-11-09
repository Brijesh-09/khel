import React from 'react';
import youthImage from '../assets/youth.jpeg';
import "../App.css"

function InfoSection() {
  return (
    <div className="container">
      <div className="col image-col">
        <img src={youthImage} alt="Youth" />
      </div>
      <div className="col text-col">
        <h2>Join Local Sports Activities</h2>
        <p>Find and participate in sports events happening in your area</p>

        <h2>Discover Events Near You</h2>
        <p>Discover new sports events near you</p>

        <h2>Community Engagement</h2>
        <p>Connect with local sports enthusiasts</p>
      </div>
    </div>
  );
}

export default InfoSection;
