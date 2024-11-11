import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"


const Hero_2 = () => {
    const [image, setImage] = useState(null); // State to store the image URL
    const [loading, setLoading] = useState(true); // Loading state
  
    useEffect(() => {
      const fetchImage = () => {
        // The API just returns an image directly, no need for axios here
        const imageUrl = 'https://picsum.photos/200';
        setImage(imageUrl); // Directly set the image URL
        setLoading(false); // Stop loading once the image URL is set
      };
  
      fetchImage();
    }, []);
  
    // If still loading, show a loading message
    if (loading) {
      return <div>Loading image...</div>;
    }
  
    // If no image is found, show a fallback message
    if (!image) {
      return <div>No image found</div>;
    }
  
    return (
      <div className="image-container">
        <img src={image} alt="Fetched Image" />
      </div>
    );
  };

export default Hero_2;
