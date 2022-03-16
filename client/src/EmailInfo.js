import React, { useContext, useState } from 'react';
import './styles/EmailInfo.css';
import { useHistory } from 'react-router-dom';
import { signInWithGoogle } from './Firebase';
import { ProfileContext } from './Contexts/GlobalState';

function EmailInfo() {

  const history = useHistory();

  const {profile, setProfile, setSignedIn} = useContext(ProfileContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submitDetails = (e) => {
    e.preventDefault(); 
  }

  // FUNCTION TO MOVE TO LOGIN PAGE 
  const moveToLoginPage = e => {
    e.preventDefault();
    history.push('/login')
  }

  const handleGoogleAuth = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(result => {
        console.log(result);
        setProfile(result.user);
        setSignedIn(true);
      }).catch(error => console.log(error));
  }

  return (
    <div className='emailInfo'>
        <h1>Get Started with Google</h1>
        {/* <input placeholder='Enter Your Name' value = {name} onChange = {(e) => setName(e.target.value)}/>
        <input placeholder='Enter Your Email' value = {email} onChange = {e => setEmail(e.target.value)} />
        <input placeholder='Enter Your Password' type = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/> */}

        {/* <button onClick = {submitDetails}>Sign Up</button> */}
        <button onClick={handleGoogleAuth}>Sign In With Google</button>
        {/* {moveOn && <h1>Move on to next </h1>} */}
        {/* <div className='logIn'>
            <span>Already have an account?</span>
            <button onClick={moveToLoginPage}>Log in</button>
        </div> */}

    </div>
  )
}

export default EmailInfo