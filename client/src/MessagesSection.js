import React from 'react'
import './styles/MessagesSection.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import SingleMsg from './SingleMsg';


function MessagesSection() {
  return (
    <div className='msgSection'>

      {/* HEADER  */}
        <div className="msgSection__header">
          <div className='header__image'>
            <img src = "https://userpic.codeforces.org/2018443/title/38fb16c17026a84c.jpg" />
          </div>
          <div className="header__content">
            <div className="header__personInfo">
              <p>Shivam</p>
              <small>shivam-ug20@nsut.ac.in</small>
            </div>
            <div className='header__icons'>
              <MoreVertIcon style={{ color: "gray" }} />
            </div>
          </div>
        </div>

        {/* ALL MESSAGES  */}
        <div className='allMessages'>
          <SingleMsg own = {false}/>
          <SingleMsg own = {true} />
          <SingleMsg own = {true} />
          <SingleMsg own = {true} />
          <SingleMsg own = {false}/>
          <SingleMsg own = {false}/>
          <SingleMsg own = {false}/>
          <SingleMsg own = {false}/>
          <SingleMsg own = {false}/>

        </div>

        {/* MESSAGE INPUT  */}
        <div className="messageInput">
          <input/>
          <button>
          <SendIcon/>
          </button>
        </div>

    </div>
  )
}

export default MessagesSection