import React, { useEffect, useState } from 'react'
import Capture from '../components/capture'
import Message from '../components/message'
import axios from 'axios'

let initialChat = []


const Home = () => {
  const [chat, setChat] = useState(initialChat)
  useEffect(() => {
    axios
      .get("http://167.71.154.9/messages")
      .then(res => res.data)
      .then(data => setChat(data));
  });

  const onSend = (message) => {
    setChat([message, ...chat])
  }

  return (
    <div>
      <div className="title">
        <h2>Class Chat</h2>
      </div>
      <div className="chat">
        { chat.map(message => <Message name={message.name} text={message.text}/>) }
      </div>
      <div className="capture">
        <Capture onSend= { onSend } />
      </div>

      <style jsx>{`

      .title {
        text-align:center;
        margin-top: 10px;
      }

      .chat {
        overflow: scroll;
        max-width:680px;
        width:680px;
        height:80vh;
        margin: 20px auto;
      }

      .capture {
        max-width:700px;
        width:700px;
        margin: 0 auto;
      }

      `}</style>

    </div>
)}

export default Home
