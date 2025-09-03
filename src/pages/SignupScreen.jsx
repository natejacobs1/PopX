import React from 'react';
import { Link } from 'react-router-dom';

const SignupScreen = () => {
  return (
    <div className="form-container">
      <h1>
        Create your <br />
        PopX account
      </h1>

      <form>
        <div className="input-group-signup">
          <label htmlFor="fullName">Full Name*</label>
          <input type="text" id="fullName" placeholder="Enter full name" />
        </div>

        <div className="input-group-signup">
          <label htmlFor="phone">Phone number*</label>
          <input type="tel" id="phone" placeholder="Enter phone number" />
        </div>

        <div className="input-group-signup">
          <label htmlFor="email">Email address*</label>
          <input type="email" id="email" placeholder="Enter email address" />
        </div>

        <div className="input-group-signup">
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>

        <div className="input-group-signup">
          <label htmlFor="company">Company name</label>
          <input type="text" id="company" placeholder="Enter company name" />
        </div>

        <div className="radio-group">
          <p>Are you an Agency?*</p>
          <label>
            <input type="radio" id="yes" name="agency" value="Yes" /> Yes
          </label>
          <label>
            <input type="radio" id="no" name="agency" value="No" /> No
          </label>
        </div>

        <Link to="/profile" className="btn-create-account">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default SignupScreen;
