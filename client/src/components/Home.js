import React, { useContext } from 'react'
import AllChat from './AllChat'
import ChatInfo from './ChatInfo'
import { ProfileContext } from '../Contexts/GlobalState'
import MessagesSection from './MessagesSection'
import Options from './Options'
import '../styles/Home.css';

function Home() {

  const { profile } = useContext(ProfileContext);

  return (
    <div className='home'>
        <Options/>
        <AllChat/>
        <MessagesSection/>
        <ChatInfo/>
    </div>
  )
}

export default Home;