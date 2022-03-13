import React from 'react'
import './styles/PhoneNumberInfo.css';

const PhoneNumberInfo = () => {
  return (
    <div className="wrapper">
      <h1 className="main-heading">Sign in</h1>
      <p className="sub-text">Please verify your phone number.</p>
        <div className="form-wrapper">
          <form id="loginForm">
            <div className="input-field">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                autoComplete="false"
              />
              <br />
              <input
                type="text"
                placeholder="OTP"
                name="phone"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit" id="sign-in-button">
              Sign in
            </button>
          </form>
        </div>
    </div>
  );
};

export default PhoneNumberInfo