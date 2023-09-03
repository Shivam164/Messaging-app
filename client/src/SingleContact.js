import React, { useContext } from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/SingleContact.css';
import { ProfileContext } from './Contexts/GlobalState';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SingleContact({name, image, email, setErrorMsg, _id}) {

  const {profile, setProfile, selectedChat, setSelectedChat} = useContext(ProfileContext);
  const history = useHistory();

  const handleMessaging = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const BODY = {
      userId : profile._id,
      user : {
        _id : _id
      }
    }

    try{
      const { data } = await axios.post(
        "http://localhost:5000/api/chat/accessGroup",
        BODY,
        config
      )

      await setSelectedChat(data);
      history.push("/");
      console.log(data);
    }catch(error){
      console.log(error.response);
      setErrorMsg(error.response.data.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }

  }

  const handleRemoveContact = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const BODY = {
        emailId : email,
        userEmailId : profile.emailId
    };

    try{
      const { data } = await axios.put(
        "http://localhost:5000/api/user/removeContact",
        BODY,
        config
      )
      await setProfile(data.user);

    }catch(error){
      console.log(error.response);
      setErrorMsg(error.response.data.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }

  }

  return (
    <div className='single__contact'>
        <div className='contacts__left__container'>
            <img src = {image} />
            <p>{name}</p>
        </div>
        <div className='contacts__icons'>
          <button onClick={handleMessaging}>
            <ChatBubbleIcon/>
          </button>
          <button onClick={handleRemoveContact}>
            <DeleteIcon/>
          </button>
        </div>

    </div>
  )
}

export default SingleContact