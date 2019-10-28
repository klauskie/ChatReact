import React from 'react'
import '../styles.scss'

const Message = (props) => (
  <div className="message">
    <div className="user">{props.name}</div>
    <div>{props.text}</div>

    <style jsx>{`
    .gray {
      color:gray;
    }

    .message {
      padding: 7px 5px;
      border-bottom: solid 1px #EFEFEF;
      font-family: sans-serif;
    }

    .user {
      color: blue;
    }

    `}</style>

  </div>

  
)

export default Message
