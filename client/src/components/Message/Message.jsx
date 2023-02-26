import React from 'react'
import './style.css';

const Message = ({ message}) => {
  return (
    <>
      {message.isBot ? (
        <div className=" row bot">
          <div className=" col bot_msg">
            <span className="">
              <code>
              {message.codeHtml}
              </code>
              {message.text}
            </span>
          </div>
          {/* <i className="fas fa-desktop w-6 h-6 dark:text-white  rounded-full order-1" /> */}
        </div>
      ) : (
        <div className="user">
          <div className="col user_msg">
             <span className="">{message.text}</span>
          </div>
          {/* <i className="fas fa-user w-6 h-6 dark:text-white  rounded-full order-1" /> */}
        </div>
      )}
    </>
  )
}

export default Message