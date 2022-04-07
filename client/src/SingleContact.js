import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/SingleContact.css';

function SingleContact() {
  return (
    <div className='single__contact'>
        <div className='contacts__left__container'>
            <img src = "https://userpic.codeforces.org/2018443/title/38fb16c17026a84c.jpg" />
            <p>Ankush Goel</p>
        </div>
        <div className='contacts__icons'>
            <ChatBubbleIcon/>
            <DeleteIcon/>
        </div>

    </div>
  )
}

export default SingleContact