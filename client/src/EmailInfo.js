import React from 'react';
import './styles/EmailInfo.css';

function EmailInfo() {
  return (
    <div className='emailInfo'>
        <h1>Create an account</h1>
        <input placeholder='Enter Your Name' />
        <input placeholder='Enter Your Email' />
        <input placeholder='Enter Your Password' type = 'password'/>

        <button>Sign Up</button>
        <div className='logIn'>
            <span>Already have an account?</span>
            <button>Log in</button>
        </div>

    </div>
  )
}

export default EmailInfo