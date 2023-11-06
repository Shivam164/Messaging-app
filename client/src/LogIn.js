import React, { useContext, useState } from 'react'
import './styles/SignIn.css';
import pic from './assets/signIn-img.png';
import { ProfileContext } from './Contexts/GlobalState';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LogIn() {

const {setProfile, setSignedIn} = useContext(ProfileContext);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const history = useHistory();


const submitDetails = async () => {
    const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      const BODY = {
          emailId : email,
          password : password
        };
  
      try{
  
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/auth/login`,
          BODY,
          config
        );
  
        await setProfile(data.user);
      await localStorage.setItem("authToken", data.token);
      setSignedIn(true);
      history.push('/');
  
      }catch(error){
        setErrorMessage(error.response.data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
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
                    {errorMessage && <p className='signup__error'>{errorMessage}</p>}
                    <button onClick = {submitDetails}>Log in</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn