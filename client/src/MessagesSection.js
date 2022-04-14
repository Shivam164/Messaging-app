import React, { useContext, useEffect, useState } from 'react'
import './styles/MessagesSection.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import SingleMsg from './SingleMsg';
import axios from 'axios';
import { ProfileContext } from './Contexts/GlobalState';
import io from 'socket.io-client';
var socket;
const ENDPOINT = "http://localhost:5000";

function MessagesSection() {

  const {selectedChat, setSelectedChat, profile} = useContext(ProfileContext);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", profile);
    socket.on("connection", () => setSocketConnected(true));
  },[]);

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      };

      const BODY = {
        groupId : selectedChat._id
      }

      setLoading(true);

      const { data } = await axios.post(
        '/api/chat/allMessages',
        BODY,
        config
      );
      setMessages(data);
      console.log(data);
      setLoading(false);
      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    socket.on('message received',(newMessageReceived) => {
      if(!selectedChat || selectedChat._id !== newMessageReceived.group._id){
        // show notification
      }else{
        setMessages([...messages, newMessageReceived]);
      }
    })
  })

  const sendMessages = async (e) => {
    e.preventDefault();
    setText("");
    const config = {
      headers : {
        "Content-Type" : "application/json"
      }
    };

    const BODY = {
      groupId : selectedChat._id,
      text : text,
      chatId : selectedChat._id,
      user : {
        _id : profile._id
      }
    }

    try{
      const { data } = await axios.post(
        '/api/chat/sendMessages',
        BODY,
        config
      );

      console.log(data);
      socket.emit("new message", data);
      setMessages([...messages, data]);

    }catch(error){
      console.log(error);
      alert(error.response.data.message);
    }


  }

  useEffect(() => {
    fetchMessages();
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
          {loading && <p>Messages are loading ...</p>}
          {!loading && messages &&
            messages.map(message => (
              <SingleMsg message = {message} key = {message._id}/>
            ))
          }
        </div>

        {/* MESSAGE INPUT  */}
        <form className="messageInput" onSubmit={sendMessages}>
          <input value = {text} onChange={e => setText(e.target.value)}/>
          <button onClick={sendMessages}>
            <SendIcon/>
          </button>
        </form>
      </> }
      {!selectedChat && <p>Not selected anything</p>}
    </div>
  )
}

export default MessagesSection