import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function ModalComponent({ show, handleClose }) {
  const [isSignUp, setIsSignUp] = useState(true);  // To toggle between Sign Up and Sign In forms
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle Sign Up form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !password) {
      setError('Both name and password are required.');
      return;
    }

    try {
      const response = await axios.post('/api/auth/register', { name, password });

      // Store the JWT token received in response
      localStorage.setItem('jwtToken', response.data.token);

      setName('');
      setPassword('');
      setError('');
      alert('Sign Up successful!');
      handleClose();  // Close the modal after success
    } catch (err) {
      setError('Sign Up failed. Please try again.');
      console.error(err);
    }
  };

  // Handle Sign In form submission
  const handleSignIn = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }

    try {
      // Retrieve JWT token from localStorage
      const jwtToken = localStorage.getItem('jwtToken');

      if (!jwtToken) {
        setError('Please sign up first to get a token.');
        return;
      }

      // Send Sign In request to API with credentials and JWT token
      const response = await axios.post('/api/auth/login', { username, password }, {
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        }
      });

      console.log('Sign In successful:', response.data);
      alert('Sign In successful!');
      handleClose();  // Close the modal after success
    } catch (err) {
      setError('Sign In failed. Please check your credentials or try again.');
      console.error(err);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSignUp ? 'Sign Up' : 'Sign In'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}

        <Form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
          {/* Conditionally render Name field based on Sign Up or Sign In */}
          {isSignUp && (
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          )}

          <Form.Group controlId="formUsername">
            <Form.Label>{isSignUp ? 'Username' : 'Username'}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username || name}  // Use 'name' for Sign Up
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-4">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
