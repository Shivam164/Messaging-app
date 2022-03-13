import React from 'react'
import './styles/SingleMsg.css';

function SingleMsg({ own }) {
  return (
    <div className={`${own == true? 'right__singleMsg' : 'left__singleMsg'}`}>

        <div className="author__image">
            <img src = "https://userpic.codeforces.org/2018443/title/38fb16c17026a84c.jpg" />
        </div>

        <div className="msg__mainInfo">
            <small className={`${own == true? 'right' : 'left'}`}>Shivam</small>
            <div className="text__info">
                <p>hello How are you doing</p>
                <small className={`${own == true ? 'left__time' : 'right__time'}`}>7:35 PM</small>
            </div>
        </div>

    </div>
  )
}

export default SingleMsg