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
      <div className="chat">
        { chat.map(message => <Message name={message.name} text={message.text}/>) }
      </div>
      <div>
        <Capture onSend= { onSend } />
      </div>

      <style jsx>{`

      .chat {
        overflow: scroll;
        max-width:680px;
        width:680px;
        height:100vh;
        margin: 20px auto;
      }

      `}</style>

    </div>
)}

export default Home
