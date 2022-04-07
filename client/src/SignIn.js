import React, { useState } from 'react'
import './styles/SignIn.css';
import Carousel from 'react-elastic-carousel';
import EmailInfo from './EmailInfo';
import OTPverify from './OTPverify';
import pic from './assets/signIn-img.png';

function SignIn() {

  const [mailSent, setMailSent] = useState(false);  
  const [errorMessage, setErrorMessage] = useState(""); 
  const [email, setEmail] = useState(''); 

  return (
    <div className='outerBox'>
        <div className='innerContainer'>
            <div className='progress'>
                <img src = {pic} className='signIn__image'/>
            </div>
            <div className='info'>
                <Carousel className='slider'>
                    <EmailInfo mailSent={mailSent} errorMessage={errorMessage} setMailSent={setMailSent} setErrorMessage = {setErrorMessage} email = {email} setEmail = {setEmail}/>
                    <OTPverify mailSent={mailSent} errorMessage={errorMessage} setMailSent={setMailSent} setErrorMessage = {setErrorMessage} email = {email} setEmail = {setEmail}/>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default SignIn