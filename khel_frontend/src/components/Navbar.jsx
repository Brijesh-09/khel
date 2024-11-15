import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalComponent from './ModalComponent'; // Import the ModalComponent
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <>
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
          <button className="action-btn primary" onClick={handleShow}>Join Now</button>
        </div>
      </nav>

      {/* Render the ModalComponent and pass necessary props */}
      <ModalComponent show={isModalOpen} handleClose={handleClose} />
    </>
  );
}

export default Navbar;
