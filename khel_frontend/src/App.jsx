import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero_2 from './components/Hero_2';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero_2/>
      <InfoSection />
    </>
  );
}

export default App;

// Create Hero_2 , footer , and Start with backend