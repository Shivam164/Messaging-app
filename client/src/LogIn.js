import React, { useState } from 'react'
import './styles/SignIn.css';
import pic from './assets/signIn-img.png';

function LogIn() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const submitDetails = (e) => {
    e.preventDefault(); 
}

  return (
    <div className='outerBox'>
        <div className='innerContainer'>
            <div className='progress'>
                <img src = {pic} className='signIn__image'/>
            </div>
            <div className='container__info'>
                <div className='login__info'>
                    <h1>Login to Your Account</h1>
                    <input placeholder='Enter Your Email' value = {email} onChange = {e => setEmail(e.target.value)} />
                    <input placeholder='Enter Your Password' type = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/>
                    <button onClick = {submitDetails}>Log in</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn