import React from 'react';
import './styles/AllChat.css';
import CallIcon from '@mui/icons-material/Call';
import CommentIcon from '@mui/icons-material/Comment';
import Person from './Person';

function AllChat() {
  return (
    <div className='allChat'>
        <div className='allChat__header'>
          <div className='header__text'>
            <button>Open</button>
            <button>Done</button>
            <button>Unread</button>
          </div>
          <div className='header__icons'>
                <CallIcon  style={{ color: "#23e001" }}/>
                <CommentIcon style={{ color: "#23e001" }}/>
          </div>
        </div>

        {/* All Chat  */}
        <div className='allPerson'>
          <Person selected = {false}/>
          <Person selected = {true}/>
          <Person selected = {false}/>
          <Person selected = {false}/>
          <Person selected = {false}/>
          <Person selected = {false}/>
          <Person selected = {false}/>
          <Person selected = {false}/>
          <Person selected = {false}/>
          <Person selected = {false}/>
          <Person selected = {false}/>
        </div>
        
    </div>
  )
}

export default AllChat