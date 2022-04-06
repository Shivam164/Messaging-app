import React from 'react'
import './styles/PhoneNumberInfo.css';

const OTPverify = () => {
  return (
    <div className="wrapper">
      <h1 className="main-heading">Please verify your E-mail.</h1>
      <p className="sub-text">OTP has been sent on your E-mail</p>
        <input
            type="text"
            placeholder="Enter OTP"
            name="phone"
            autoComplete="false"
            />

        <button className="main-button" type="submit" id="sign-in-button">
            Verify
        </button>

        {/* <div className='OTP__check'>
           <input
            type="text"
            placeholder="OTP"
            name="phone"
            autoComplete="false"
            /> 
            <button>Verify</button>
        </div>
             */}
        
    </div>
  );
};

export default OTPverify