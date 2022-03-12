import React from 'react'
import './styles/ChatInfo.css'

function ChatInfo() {
  return (
    <div className='chatInfo'>
        <img src="https://www.w3schools.com/w3images/avatar2.png" className='profile-img'></img>
        <h2 className='heading'>Shivam</h2><br />
        <div className='Info-flex' align='left'>
           <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeW1siu3VhX3F59CRpR2fOPgJdDCDFZOdTG_quTyjTerf29JqdAIhOpOE61nXX8jiEy0&usqp=CAU" className='icon-img'></img> Company
               <textarea></textarea>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ9WCaRNgk94ot5rm4Lo4F9YW5M7Vc7uMWg&usqp=CAU" className='icon-img'></img>  Role
                 <textarea className='text-role'></textarea>
          </div>
          <div>
            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" className='icon-img'></img> Phone no
                <textarea></textarea>
          </div>
          <div>
            <img src="https://cdn.icon-icons.com/icons2/2768/PNG/512/email_icon_176616.png" className='icon-img'></img>  E-Mail id.
                <textarea></textarea>
          </div>
        </div>
    </div>
  )
}

export default ChatInfo