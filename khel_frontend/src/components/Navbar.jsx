import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';          // Changed import
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <><nav className="navbar">
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
    
    <Modal show={isModalOpen} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <input 
            type="text"
            placeholder="Type something..." 
          />
          <button type="submit">Submit</button>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbar;
