import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './styles/AddContact.css'


export const AddContact = ({ name, image, emailId }) => {
  return (
    <div className='addContact'>
        <div className = "addContact__info">
            <img src="https://userpic.codeforces.org/2018443/title/38fb16c17026a84c.jpg" className="contact__image"/> 
            <p>Some random name</p>
        </div>
        <AddIcon className='add__icon'/>
    </div>
  )
}
