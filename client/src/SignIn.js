import React from 'react'
import './styles/SignIn.css';
import Carousel from 'react-elastic-carousel';
import EmailInfo from './EmailInfo';
import PhoneNumberInfo from './PhoneNumberInfo';

function SignIn() {
  return (
    <div className='outerBox'>
        <div className='innerContainer'>
            <div className='progress'>

            </div>
            <div className='info'>
                <Carousel className='slider'>
                    <EmailInfo/>
                    <PhoneNumberInfo/>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default SignIn