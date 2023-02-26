import React, { useEffect, useRef } from 'react'
import Message from './../Message/Message'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Messages = ({ messages }) => {

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(scrollToBottom, [messages])

  return (
    <TransitionGroup className="messages">
      {messages.map((message, i) => (
        <CSSTransition timeout={500} classNames="item" key={i}>
          <Message message={message} />
        </CSSTransition>
      ))}
      <div ref={messagesEndRef} />
    </TransitionGroup>
  )
}

export default Messages