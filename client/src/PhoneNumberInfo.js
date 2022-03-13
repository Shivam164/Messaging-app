import React from 'react'
import './styles/PhoneNumberInfo.css';

const PhoneNumberInfo = () => {
  return (
    <div className="wrapper">
      <h1 className="main-heading">Add Your Phone Number</h1>
      <p className="sub-text">Please verify your phone number.</p>
        <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            autoComplete="false"
            />

        <button className="main-button" type="submit" id="sign-in-button">
            Send OTP
        </button>

        <div className='OTP__check'>
           <input
            type="text"
            placeholder="OTP"
            name="phone"
            autoComplete="false"
            /> 
            <button>Verify</button>
        </div>
            
        
    </div>
  );
};

export default PhoneNumberInfo