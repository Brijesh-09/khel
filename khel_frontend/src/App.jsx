import { useState } from 'react'
import './App.css'

function App() {
  return (
    
    
    <>
    <Navbar/>
    <Hero/>
    
    </>
    
      
    // </div>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path-to-your-logo" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/activities">Activities</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar-actions">
        <button className="action-btn primary">Join Now</button>
        
      </div>
    </nav>
  );
}

function Hero(){
  return (
    <>
    <div className='hero'>Join the Local Sports Activity</div>
    <div className='hero-text'>Connect with like minded peoples in your locality and participate in various activities together</div>
    </>
    
  )
}




export default App
