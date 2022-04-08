import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/SingleContact.css';

function SingleContact({name, image}) {
  return (
    <div className='single__contact'>
        <div className='contacts__left__container'>
            <img src = {image} />
            <p>{name}</p>
        </div>
        <div className='contacts__icons'>
            <ChatBubbleIcon/>
            <DeleteIcon/>
        </div>

    </div>
  )
}

export default SingleContact