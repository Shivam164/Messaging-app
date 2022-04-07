import React, { useEffect, useState } from 'react'
import SingleContact from './SingleContact'
import './styles/Contacts.css'
import AddIcon from '@mui/icons-material/Add';
import Options from './Options';
import ChatInfo from './ChatInfo';

function Contacts() {

  const [showForm,setshowForm] = useState(false);
  const [errorMsg,setErrorMsg] = useState("fasdkfj");

  const handleShowFormButton = () => {
    setshowForm(!showForm);
  }

  return (
    <div className='contacts__page'>
        <Options/>
        <div className='all__contacts'>

            <div className='contacts__heading'>
                <h1>Contacts</h1>
                <button className='contacts__add__btn' onClick={handleShowFormButton}><AddIcon className='add__icon' style={{ color: "#23e001" }}/>Add a new Contact</button>
                {showForm && 
                <form className = "contact__form">
                    <div className='input__container'>
                    <input type = "email"/>
                    <button>Add</button>
                    </div>
                    {errorMsg && <p className='error__message'>{errorMsg}</p>}
                </form>
                }
            </div>
            

            <SingleContact/>
            <SingleContact/>
            <SingleContact/>
            <SingleContact/>
            <SingleContact/>
            <SingleContact/>
            <SingleContact/>
            <SingleContact/>

        </div>
        <ChatInfo/>
    </div>
  )
}

export default Contacts