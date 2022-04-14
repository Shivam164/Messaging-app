import {useState, createContext} from 'react';

export const ProfileContext = createContext();

export const ProfileContextProvider = (props) => {
    
      const [profile,setProfile] = useState(null);
      const [signedIn,setSignedIn] = useState(false);
      const [selectedChat, setSelectedChat] = useState(null);
      var socket;

      return(
          <ProfileContext.Provider value = {{profile, setProfile, signedIn, setSignedIn, selectedChat, setSelectedChat, socket}}>
              {props.children}
          </ProfileContext.Provider>
      )
}
