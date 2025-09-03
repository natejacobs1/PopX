import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if both email and password fields have content
  const isFormValid = email.length > 0 && password.length > 0;

  return (
    <div className="form-container">
      <h1>Sign in to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit,</p>
      
      <form>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <Link 
          to={isFormValid ? "/profile" : "#"} 
          className={`btn-login ${isFormValid ? 'btn-login-active' : ''}`}
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default LoginScreen;