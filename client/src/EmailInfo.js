import React, { useContext, useState } from 'react';
import './styles/EmailInfo.css';
import { useHistory } from 'react-router-dom';
import axios from "axios";

function EmailInfo({ errorMessage, mailSent, setErrorMessage, setMailSent, email, setEmail, password, setPassword, name, setName }) {

  const history = useHistory();

  const submitDetails = async(e) => {
    e.preventDefault();

    if(name == "" || email == "" || password == ""){
      setErrorMessage("You need to fill all the details first");
      setTimeout(() => {
        setErrorMessage("");
      },5000);
      
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
        "http://localhost:5000/api/auth/signup",
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

  // FUNCTION TO MOVE TO LOGIN PAGE 
  const moveToLoginPage = e => {
    e.preventDefault();
    history.push('/login')
  }


  return (
    <div className='emailInfo'>
        <h1>Get Started with Sign Up</h1>
        <form className='signIn__form'>
          <input placeholder='Enter Your Name' value = {name} onChange = {(e) => setName(e.target.value)}/>
          <input placeholder='Enter Your Email' value = {email} onChange = {e => setEmail(e.target.value)} />
          <input placeholder='Enter Your Password' type = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/>
          <button onClick = {submitDetails}>Sign Up</button>
        </form>
        {errorMessage && <p className='signup__error'>{errorMessage}</p>}
        {mailSent && <p className='mail__sent'>Mail Sent, Verify Your Email</p>}
        <div className='logIn'>
            <span>Already have an account?</span>
            <button onClick={moveToLoginPage}>Log in</button>
        </div>

    </div>
  )
}

export default EmailInfo