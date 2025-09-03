import React from 'react';
import { Link } from 'react-router-dom';

const LandingScreen = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <Link to="/signup" className="btn btn-primary">Create Account</Link>
        <Link to="/login" className="btn btn-secondary">Already Registered? Login</Link>
      </div>
    </div>
  );
};

export default LandingScreen;