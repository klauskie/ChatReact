import React from 'react'
import '../styles.scss'

const Message = (props) => (
  <div className="message">
    <div>{props.name}</div>
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

    `}</style>

  </div>

  
)

export default Message
