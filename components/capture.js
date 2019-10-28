import React, { useEffect, useState }  from 'react'
import '../styles.scss'
import axios from 'axios'

const Capture = (props) => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const sendPost = () => {
        axios.post('http://167.71.154.9/messages',  { "name": 'klaus', "text": message } )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const onClickSend = () => {
        //props.onSend({name:name, text: message})
        sendPost()
        clear()
    }

    const clear = () => {
        setMessage('')
        setName('')
    }

    return (
        <div>
            <div className="field has-addons">
                <textarea 
                    className="input" 
                    placeholder="Type a message"
                    value={ message }
                    onChange={ e => setMessage(e.target.value)}
                />

                <button 
                    className="button is-info" 
                    onClick= {onClickSend}
                >
                        Send
                </button> 
            </div>
            

            <style jsx>{`

            .container {
                display:flex;
                justify-content: flex-start;
            }

            `}</style>

        </div>
)}

export default Capture