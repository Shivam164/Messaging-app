import React from 'react';
import './styles/Person.css';

function Person({ selected }) {
  return (
    <div className={`person ${selected == true? ' selected':' not-selected'}`}>
        <div className="person__image">
            <img src = "https://userpic.codeforces.org/2018443/title/38fb16c17026a84c.jpg" />
        </div>
        <div className="personchat__info">
           <div className='person__name'>
                <p>Shivam</p>
                <small>7:35 PM</small>
           </div>
           <div className='person__chat'>
                <p>Hi</p>
           </div>
        </div>
        
    </div>
  )
}

export default Person