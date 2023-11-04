import React, { useContext, useEffect } from 'react'
import './styles/ChatInfo.css'
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ProfileContext } from './Contexts/GlobalState';
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
           <div>
           <WorkIcon />Company :  Undisclosed 
          </div>
          <div>
            <AccountCircleIcon />Role : Undisclosed  
          </div>
          <div>
            <PhoneIcon/>Phone no : Undisclosed 
          </div>
          <div>
            <EmailIcon />E-Mail id. : {OtherUser().email}
          </div>
        </div>
        </>}
        {!selectedChat && <img src="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg" className='default-img' alt="image"></img>}
    </div>
  )
}

export default ChatInfo