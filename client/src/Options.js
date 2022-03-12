import React from 'react';
import './styles/Options.css';

function Options() {
  return (
    <div className='options'>
      <img src="https://www.w3schools.com/w3images/avatar2.png" className='options-profile-img' align='left'></img>
        <h2 className='heading' align='left'>  Shivam</h2>
        <div className='options-a' align='left'>
        <br /><a href='' className='btn-options'><img src="https://st4.depositphotos.com/16602560/28648/v/450/depositphotos_286481138-stock-illustration-vector-magnifier-icon.jpg" className='icon-img'></img>  Search
        </a>
        <br /><a href='' className='btn-options'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ9WCaRNgk94ot5rm4Lo4F9YW5M7Vc7uMWg&usqp=CAU" className='icon-img'></img>  Contacts
        </a>
        <br /><a href='' className='btn-options'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalSjvLLMvbp_wKnShJqdkCZb1-4M3Tgy3JQ&usqp=CAU" className='icon-img'></img>  Settings
        </a>
        <br />
        <h1 className='heading'>Groups</h1>
        <a href='' className='btn-options'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-EzCgqxXBlHykUA7-df81Rt3FW1y5u5XgcwQ_H0S6RNwgxBpr3Tm4iLK-6Z9eEMGfJ8&usqp=CAU" className='icon-img'></img>  New Group
        </a>
        </div>
        
    </div>
    
  )
}

export default Options