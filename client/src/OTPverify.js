import React, { useContext, useState } from 'react'
import './styles/PhoneNumberInfo.css';
import axios from 'axios';
import { ProfileContext } from './Contexts/GlobalState';
import { useHistory } from 'react-router-dom';

const OTPverify = ({ mailSent, errorMessage, email, setErrorMessage, setMailSent, password, name, setName }) => {

  const {profile, setProfile, setSignedIn} = useContext(ProfileContext);
  const [otp, setOtp] = useState("");
  const history = useHistory();

  const handleVerify = async (e) => {

    e.preventDefault();

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
      console.log(data.user);
      await setProfile(data.user);
      await localStorage.setItem("authToken", data.token);
      setSignedIn(true);
      history.push('/');

    }catch(error){
      setErrorMessage(error.response.data.message);
      setMailSent(false);
      setTimeout(() => {
        setErrorMessage("");
        
      },5000);
    }
  }

  const handleResend = async () => {

    console.log(password, email);

    if(password == "" || email == ""){
      setErrorMessage("Enter email and password in signup section");;
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const BODY = {
        name : name,
        emailId : email,
        password : password
      };

    try{

      const response = await axios.post(
        "/api/auth/signup",
        BODY,
        config
      );

      setMailSent(true);

    }catch(error){
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }

  return (
    <div className="wrapper">
      <h1 className="main-heading">Please verify your E-mail</h1>
      {errorMessage && <p className="sub-text-error">{errorMessage}</p>}
      {!errorMessage && !mailSent && (password == "" || email == "") && <p className="sub-text">Enter sign up details in sign in section</p>}
      {!errorMessage && mailSent && <p className="sub-text-success">OTP has been sent to your email</p>}
      <form className='otp__form'>
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
      </form>
        <div className='logIn'>
            <button onClick={handleResend}>Resend</button>
        </div>
        
    </div>
  );
};

export default OTPverify