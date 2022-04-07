import React, { useContext, useEffect } from 'react';
import './styles/Options.css';
import { ProfileContext } from './Contexts/GlobalState';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

function Options() {

  const {profile} = useContext(ProfileContext);
  useEffect(() => {
    console.log(profile);
  },[])


  return (
    <div className='options'>
      <div className='options__header'>
         <img src={profile.image} className='options-profile-img' align='left'/>
        <h2 className='heading' align='left'>{profile.name}</h2>
      </div>

      <div className="user__options">
        <a href='' className='btn-options'><SearchIcon/>  <p>Search</p>
        </a>
        <a href='' className='btn-options'><AccountCircleIcon/>  <p>Contacts</p>
        </a>
        <a href='' className='btn-options'><SettingsIcon/>  <p>Settings</p>
        </a>
      </div>
      
        <div className='options-a' align='left'>
          <h1 className='heading'>Groups</h1>
          <a href='' className='btn-options'>
            <AddIcon/> 
            <p>New Group</p>
          </a>
        </div>
        
    </div>
    
  )
}

export default Options