import  { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Messages from './../Messages/Messages' ; 
import './styles.css';

const Chat = () => {
  const [responses, setResponses] = useState([])
  const [currentMessage, setCurrentMessage] = useState('');
  const [backendData, setBackendData] = useState([{}]) ; 
  const [userInput, setUserInput] = useState('') ; 
  const [dialogFlowRes,setDialogFlowRes ] = useState('') ; 
  // const [codeHtml,setCodeHtml ] = useState('') ; 
  const containerRef = useRef(null);

  const languageCode = 'en-US'
  const queryText = currentMessage;
  const sessionId = Math.random()*10;


  const handleMessageSubmit = (queryText) => {
    // const data = {languageCode ,queryText ,  sessionId }
    const sendData = () => {
        axios.post("http://localhost:5000/api/chatbot", {languageCode , queryText , sessionId })
           .then((res) =>{
            const responseData ={
              text: res.data.response,
              isBot: true,
              codeHtml : res.data.html
            }
              if (res.status==200 ){
                setResponses((responses) => [...responses, responseData]) ; 
                // setCodeHtml(res.data.html)
              }
           })
           .catch(err => console.log(err))
        }
        
          sendData();
  }
  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
      
    }
    if (event.key === 'Enter' && event.target.value !== '') {
      setResponses((responses) => [...responses, message])
      handleMessageSubmit(message.text);
      setCurrentMessage('');
    }
  }

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, );

  return (
    <div className="container rounded d-flex  container_wrapper">
      <div className="row ">
        <h2 className='text-dark text-center py-2 border-bottom'>chatbot</h2>
      </div>
      <div ref={containerRef} className="row chat_wrapper">
        <div className="col">
          <Messages  messages={responses}/>
        </div>
      </div>
      <div className="row input_wrapper">
        <div className="col d-flex input_col">
          <input
          value={currentMessage}
          onChange={handleMessageChange}
          onKeyDown={handleSubmit}
          type="text"
          className='form-control'
          placeholder='enter you msg here' />
          <button class="btn btn-primary btn-sm " >send </button>
        </div>
      </div>
    </div>
  )
}

export default Chat