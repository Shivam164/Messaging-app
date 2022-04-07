import React, { useContext, useState } from 'react'
import './styles/PhoneNumberInfo.css';
import axios from 'axios';
import { ProfileContext } from './Contexts/GlobalState';

const OTPverify = ({ mailSent, errorMessage, email, setErrorMessage }) => {

  const {profile, setProfile, setSignedIn} = useContext(ProfileContext);
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const BODY = {
        emailId : email,
        otp : otp
      };

    try{

      const { data } = await axios.put(
        "/api/auth/otpverification",
        BODY,
        config
      );
      await setProfile(data.user);
      await localStorage.setItem("authToken", data.token);
      setSignedIn(true);

    }catch(error){
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage("");
      },5000);
    }
  }

  return (
    <div className="wrapper">
      <h1 className="main-heading">Please verify your E-mail.</h1>
      {errorMessage && <p className="sub-text">{errorMessage}</p>}
      {!errorMessage && !mailSent && <p className="sub-text">Enter sign up details in sign in section</p>}
      {!errorMessage && mailSent && <p className="sub-text">OTP has been sent on your E-mail</p>}
        <input
            type="text"
            placeholder="Enter OTP"
            autoComplete="false"
            value = {otp}
            onChange = {e => setOtp(e.target.value)}
            />

        <button className="main-button" type="submit" id="sign-in-button" onClick={handleVerify}>
            Verify
        </button>

        <div className='logIn'>
            <button>Resend</button>
        </div>
        
    </div>
  );
};

export default OTPverify