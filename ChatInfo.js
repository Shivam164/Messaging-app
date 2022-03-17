import React from 'react'
import './styles/ChatInfo.css'
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ChatInfo() {
  return (
    <div className='chatInfo'>
        <img src="https://www.w3schools.com/w3images/avatar2.png" className='profile-img'></img>
        <h2 className='heading'>Shivam</h2><br />
        <div className='Info-flex' align='left'>
           <div>
           <WorkIcon />Company :  Google 
          </div>
          <div>
            <AccountCircleIcon />Role : SDE 
          </div>
          <div>
            <PhoneIcon/>Phone no : 493794872
          </div>
          <div>
            <EmailIcon />E-Mail id. : akdjfk@gmail.com
          </div>
        </div>
    </div>
  )
}

export default ChatInfo