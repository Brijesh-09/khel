import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components for routing
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero_2 from './components/Hero_2';
import InfoSection from './components/InfoSection';
import ImageGrid from './components/Hero_2';
import Footer from './components/Footer';
import JoinPage from './components/join'; // Import your JoinPage component

function App() {
  return (
    
      <><Navbar /><ImageGrid /><InfoSection /><Footer /></>
    
  );
}

export default App;
