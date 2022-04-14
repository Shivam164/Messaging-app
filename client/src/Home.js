import React, { useEffect } from 'react'
import AllChat from './AllChat'
import ChatInfo from './ChatInfo'
import MessagesSection from './MessagesSection'
import Options from './Options'
import './styles/Home.css';

function Home() {

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