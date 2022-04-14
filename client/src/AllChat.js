import React, { useContext, useEffect, useState } from 'react';
import './styles/AllChat.css';
import CallIcon from '@mui/icons-material/Call';
import CommentIcon from '@mui/icons-material/Comment';
import { ProfileContext } from './Contexts/GlobalState';
import Person from './Person';
import axios from 'axios';

function AllChat() {

  const [loading , setLoading] = useState(true);
  const {profile} = useContext(ProfileContext);
  const [allChat, setallChat] = useState({});

  const fetchChats = async () => {
    const config = {
      headers : {
        "Content-Type" : "application/json"
      }
    }

    console.log("profile Id" , profile._id);
    const BODY = {
      user : {
        _id : profile._id
      }
    }
    try{

      const { data } = await axios.post(
        "/api/chat/fetchChats",
        BODY,
        config
      );

      console.log(data);
      setallChat(data);
      setLoading(false);

    }catch(error){
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchChats();
  },[]);

  const fetchOtherUser = (data) => {
    const allUsers = data.users;
    return {
      name : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].name,
      email : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].emailId,
      image : allUsers[((allUsers[0]._id === profile._id)? 1 : 0)].image
    }
  }
 
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
        {loading && <p>Content is loading ...</p>}
        {!loading &&
          <div className='allPerson'>
            {allChat && allChat.map(chat => (
              <Person 
              isGroup = {chat.isGroupChat} 
              name = {fetchOtherUser(chat).name} 
              image = {fetchOtherUser(chat).image} 
              chat = {chat}
              key = {chat._id}
              />
            ))}
          </div>
        }
        
    </div>
  )
}

export default AllChat