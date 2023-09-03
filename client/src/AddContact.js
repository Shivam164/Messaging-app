import React, { useContext, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import './styles/AddContact.css'
import { ProfileContext } from './Contexts/GlobalState';
import axios from 'axios';

export const AddContact = ({ name, image, emailId, _id, setSearchedUser, setShowUser, setErrorMsg }) => {

  const {profile, setProfile} = useContext(ProfileContext);

  const handleAdd = async () => {
    const config = {
      headers: {
        "Content-type": "application/json"
      },
    };

    const BODY = {
      _id : _id,
      name : name,
      emailId : emailId,
      image : image,
      userEmailId : profile.emailId
    }

    console.log(BODY);

    try{
      const { data } = await axios.put(
        "http://localhost:5000/api/user/addContact",
        BODY,
        config
      );
      await setProfile(data.user);
      await setShowUser(false);
      await setSearchedUser({});
    }catch(error){
      console.log(error);
      setErrorMsg(error.response.data.message);
      setTimeout(() => {
        setErrorMsg("");
      },5000);
    }
    
  }

  return (
    <div className='addContact'>
        <div className = "addContact__info">
            <img src={image} className="contact__image"/> 
            <p>{name}</p>
        </div>
        <button className='addContact__btn' onClick = {handleAdd}><AddIcon className='add__icon'/></button>
    </div>
  )
}
