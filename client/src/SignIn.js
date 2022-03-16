import React from 'react'
import './styles/SignIn.css';
import Carousel from 'react-elastic-carousel';
import EmailInfo from './EmailInfo';
import PhoneNumberInfo from './PhoneNumberInfo';
import pic from './assets/signIn-img.png';

function SignIn() {
  return (
    <div className='outerBox'>
        <div className='innerContainer'>
            <div className='progress'>
                <img src = {pic} className='signIn__image'/>
            </div>
            <div className='info'>
                <EmailInfo/>
                {/* <Carousel className='slider'>
                    
                    <PhoneNumberInfo/>
                </Carousel> */}
            </div>
        </div>
    </div>
  )
}

export default SignIn