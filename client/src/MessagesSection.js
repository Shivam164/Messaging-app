import React, { useContext, useState } from 'react'
import './styles/MessagesSection.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import SingleMsg from './SingleMsg';
import axios from 'axios';
import { ProfileContext } from './Contexts/GlobalState';

function MessagesSection() {

  const {selectedChat, setSelectedChat, profile} = useContext(ProfileContext);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState("");

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `/api/chat/${selectedChat._id}`,
        config
      );
      setMessages(data);
      setLoading(false);

    } catch (error) {
      
    }
  };

  // useEffect(() => {
  //   fetchMessages();
  // }, [selectedChat]);

  const OtherUser = () => {
    const allUsers = selectedChat.users;
    console.log({
      name : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].name,
      email : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].emailId,
      image : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].image
    });
    return {
      name : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].name,
      email : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].emailId,
      image : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].image
    }
  }

  return (
    <div className='msgSection'>

      {selectedChat && 
        <>
        <div className="msgSection__header">
          <div className='header__image'>
            <img src = {OtherUser().image} />
          </div>
          <div className="header__content">
            <div className="header__personInfo">
              <p>{selectedChat.isGroupChat? "Group" : `${OtherUser().name}`}</p>
              <small>{OtherUser().email}</small>
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
      </> }
      {!selectedChat && <p>Not selected anything</p>}
    </div>
  )
}

export default MessagesSection