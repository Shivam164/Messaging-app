import React, { useContext } from 'react';
import { ProfileContext } from './Contexts/GlobalState';
import './styles/Person.css';

function Person({ name, image, isGroup, chat }) {

  const {selectedChat, setSelectedChat} = useContext(ProfileContext);

  const handleClick = () => {
    setSelectedChat(chat)
  }

  const findSelectedOrNot = () => {
    if(!selectedChat || selectedChat._id !== chat._id)return false;
    return true;
  }

  return (
    <div className={`person ${findSelectedOrNot()? ' selected':' not-selected'}`} onClick = {handleClick}>
        <div className="person__image">
            <img src = {image} />
        </div>
        <div className="personchat__info">
           <div className='person__name'>
                <p>{name}</p>
                <small>7:35 PM</small>
           </div>
           <div className='person__chat'>
                <p>Hi</p>
           </div>
        </div>
        
    </div>
  )
}

export default Person