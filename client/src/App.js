// import { useEffect , useState} from 'react';
// import axios from 'axios';

// const user="" 
// const bot="" ; 

// function App() {

//   const [backendData, setBackendData] = useState([{}]) ; 
//   const [userInput, setUserInput] = useState('') ; 
//   const [dialogFlowRes,setDialogFlowRes ] = useState('') ; 

//   // const dataToSend = userInput;
//    const languageCode = 'en-US'
//    const queryText = userInput;
//    const sessionId = Math.random()*10;
//   const reactData = [{ id: 1, name:' Tom'}, { id: 2, name:' Sarah'}];
  

//   const  generateUniqueId=() =>{
//     const timestamp = Date.now();
//     const randomNumber = Math.random();
//     const hexadecimalString = randomNumber.toString(16);

//     return `id-${timestamp}-${hexadecimalString}`;
// }

//   const whoTalk = (isBot , text, id) =>{
//     return (
//       `
//       <div class="wrapper ${isBot && 'bot'}">
//           <div class="chat">
//               <div class="profile">
//                   <img 
//                     src=${isBot ? bot : user} 
//                     alt="${isBot ? 'bot' : 'user'}" 
//                   />
//               </div>
//               <div class="message" id=${id}>
//               ${text}
//               </div>
//           </div>
//       </div>
//   `
//   )
//   }


//   const sendData = () => {
//   axios.post("http://localhost:5000/api/chatbot", {languageCode , queryText , sessionId })
//      .then((res) =>{
//         if (res.status==200 ){
//           console.log(res.data)
//           setDialogFlowRes(res.data.response)
//         }
//      })
//      .catch(err => console.log(err))
//   }

//   const handleChange= (e)=>{
//     setUserInput(e.target.value) ; 
//   } ; 

//   const handleClick =(e)=>{
//     e.preventDefault() ; 
//     sendData();
//   }



//   const fetchDataFromServer = async() =>{
//     fetch('/api')
//     .then(response => response.json())
//     .then(data => {
//       setBackendData(data) ; 
//       console.log(data)
//     })
//     .catch(error => console.error(error));
//   }
  
//   useEffect(() => {
//     fetchDataFromServer();
//   },[])

//   return (
//     <div className="App">
//       <form >
//         <input placeholder='your message...' type="text" value={userInput} onChange={handleChange}/>
//         <button onClick={handleClick}>send</button>
//       </form>
//       <div id='chat_container'>
//         { dialogFlowRes}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
import Button from './components/Button/Button'
import Chat from './components/Chat/Chat'
import {Route , BrowserRouter as Router ,Routes} from 'react-router-dom';


function App() {
  const [show, setShow] = useState(false)

  const showBtn = () => {
    setShow(!show)
  }

  return (
    <>
      <Button show={show} showBtn={showBtn} />
      {show && <Chat />}
    </>
  )
}

export default App;