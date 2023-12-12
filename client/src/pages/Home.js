import React, { useContext } from 'react'
import AllChat from '../components/AllChat'
import ChatInfo from '../components/ChatInfo'
import { ProfileContext } from '../Contexts/GlobalState'
import MessagesSection from '../components/MessagesSection'
import Options from '../components/Options'
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