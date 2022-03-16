import {useState, createContext} from 'react';

export const ProfileContext = createContext();

export const ProfileContextProvider = (props) => {
    
      const [profile,setProfile] = useState(null);
      const [signedIn,setSignedIn] = useState(false);

      return(
          <ProfileContext.Provider value = {{profile, setProfile, signedIn, setSignedIn}}>
              {props.children}
          </ProfileContext.Provider>
      )
}
