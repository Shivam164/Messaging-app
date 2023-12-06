import React, { useContext, useEffect } from 'react'
import '../styles/ChatInfo.css'
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ProfileContext } from '../Contexts/GlobalState';
import pic from '../assets/message-icon.png';

var selectedChatCompare;

function ChatInfo() {

  const {selectedChat, profile, setNewMessage} = useContext(ProfileContext);
  useEffect(() => {
    selectedChatCompare = selectedChat;
  }, [selectedChat]);
  const OtherUser = () => {
    const allUsers = selectedChat.users;
    return {
      name : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].name,
      email : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].emailId,
      image : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].image
    }
  }
  return (
    <div className='chatInfo'>
      {selectedChat && 
        <>
        <img src={OtherUser().image} className='profile-img' alt="photo"></img>
        <h2 className='heading'>{OtherUser().name}</h2><br />
        <div className='Info-flex' align='left'>
           <div className='chat_details'>
           <WorkIcon /><p>Company :  Not Available</p> 
          </div>
          <div className='chat_details'>
            <AccountCircleIcon /><p>Role : Not Available</p>  
          </div>
          <div className='chat_details'>
            <PhoneIcon/><p>Phone no : Not Available</p> 
          </div>
          <div className='chat_details'>
            <EmailIcon /><p>E-Mail id. : {OtherUser().email}</p>
          </div>
        </div>
        </>}
        {!selectedChat && <img src={pic} className='default-img' alt="image"/>}
    </div>
  )
}

export default ChatInfo