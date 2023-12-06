import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../Contexts/GlobalState';
import '../styles/Person.css';

function Person({ name, image, isGroup, chat }) {

  const {selectedChat, setSelectedChat, newMessage} = useContext(ProfileContext);

  const [latestMsg, setlatestMsg] = useState("");
  const [lastesMsgTime, setlatestMsgTime] = useState("");

  const makeItShort = (str) => {
    if(str.length < 25)return str;
    else str =  str.slice(0,23) + "....";
    return str;
  }

  useEffect(() => {
    if(!newMessage){
      if(chat && chat.latestMessage){
        setlatestMsg(makeItShort(chat.latestMessage.text));
        setlatestMsgTime(new Date(chat.latestMessage.createdAt).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
      }
      return;
    }else{
      if(newMessage.group._id === chat._id){
        setlatestMsg(makeItShort(newMessage.text));
        setlatestMsgTime(new Date(newMessage.createdAt).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
      }
    }
  },[newMessage]);

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
                <small>{lastesMsgTime}</small>
           </div>
           <div className='person__chat'>
                {latestMsg && <p>{latestMsg}</p>}
           </div>
        </div>
        
    </div>
  )
}

export default Person