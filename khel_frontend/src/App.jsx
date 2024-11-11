import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero_2 from './components/Hero_2';
import InfoSection from './components/InfoSection';
import ImageGrid from './components/Hero_2';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageGrid/>
      <InfoSection />
      <Footer/>
    </>
  );
}

export default App;
