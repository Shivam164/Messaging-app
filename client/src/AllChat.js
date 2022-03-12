import React from 'react';
import './styles/AllChat.css';
import CallIcon from '@mui/icons-material/Call';
import CommentIcon from '@mui/icons-material/Comment';

function AllChat() {
  return (
    <div className='allChat'>
        <div className='allChat__header'>
          <div className='header__text'>
            <button className='open__btn'>Open</button>
            <button className='done__btn'>Done</button>
            <button className='unread__btn'>Unread</button>
          </div>
          <div className='header__icons'>
                <CallIcon  style={{ color: "#23e001" }}/>
                <CommentIcon style={{ color: "#23e001" }}/>
          </div>
        </div>
    </div>
  )
}

export default AllChat