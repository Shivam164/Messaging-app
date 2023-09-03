import React, { useContext, useEffect, useState } from 'react'
import SingleContact from './SingleContact'
import './styles/Contacts.css'
import AddIcon from '@mui/icons-material/Add';
import Options from './Options';
import ChatInfo from './ChatInfo';
import { ProfileContext } from './Contexts/GlobalState';
import axios from 'axios';
import { AddContact } from './AddContact';

function Contacts() {

  const [errorMsg,setErrorMsg] = useState("");
  const {profile} = useContext(ProfileContext);
  const [SearchedUser, setSearchedUser] = useState({});
  const [emailId, setEmailId] = useState("");
  const [showUser, setShowUser] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const BODY = {
        emailId : emailId,
      };

    try{

      const { data } = await axios.post(
        "http://localhost:5000/api/user/findContact",
        BODY,
        config
      );

      setSearchedUser(data);
      setShowUser(true);

    }catch(error){
      console.log(error.response);
      setErrorMsg(error.response.data.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }
    
  }

  return (
    <div className='contacts__page'>
        <Options/>
        
        <div className='all__contacts'>
          
            <div className='contacts__heading'>
                <h1>Contacts</h1> 
                <form> 
                <div className='input__container'>
                  <input type = "email" placeholder='Enter Email' value = {emailId} onChange = {e => setEmailId(e.target.value)} />
                  <button onClick={handleSearch}>Search</button>
                </div>
                </form>
                {errorMsg && <p className='error__message'>{errorMsg}</p>}
            </div>
          {showUser && SearchedUser && 
          <AddContact 
            name = {SearchedUser.name}
            image = {SearchedUser.image}
            emailId = {SearchedUser.emailId} 
            _id = {SearchedUser._id} 
            setShowUser = {setShowUser} 
            setSearchedUser = {setSearchedUser}
            setErrorMsg = {setErrorMsg}
          />}

            <div className='contacts__list'>
              {!profile.allContacts && <p>No Contacts to show</p>}
              {profile.allContacts && profile.allContacts.map((contact) => (
                <SingleContact 
                name = {contact.name} 
                image = {contact.image} 
                email = {contact.email}
                _id = {contact._id}
                setErrorMsg = {setErrorMsg}
                /> 
              ))}
              
            </div> 
        </div>
        <ChatInfo/>
    </div>
  )
}

export default Contacts