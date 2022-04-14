import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from './Contexts/GlobalState';
import './styles/SingleMsg.css';

function SingleMsg({ message }) {

  const {profile} = useContext(ProfileContext);
  
  return (
    <div className={`${profile._id == message.sender._id? 'right__singleMsg__container' : 'left__singleMsg__container'}`}>
    <div className={`${profile._id == message.sender._id? 'right__singleMsg' : 'left__singleMsg'}`}>

        <div className="author__image">
            <img src = {message.sender.image}/>
        </div>

        <div className="msg__mainInfo">
            <small className={`${profile._id == message.sender._id? 'right' : 'left'}`}>{message.sender.name}</small>
            <div className="text__info">
                <p>{message.text}</p>
                <small className={`${profile._id == message.sender._id? 'left__time' : 'right__time'}`}>7:35 PM</small>
            </div>
        </div>

    </div>
    </div>
  )
}

export default SingleMsg