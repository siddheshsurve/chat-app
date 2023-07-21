import React, { useState } from 'react'
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import { auth, db } from '../firebase-config';

const Chat = (props) => {

    const messagesRef = collection(db, "messages");    //connection particular collection

    const [newMessage, setNewMessage] = useState("");

    const {room} = props

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(newMessage === "") return;

      await addDoc(messagesRef, {
        text : newMessage,
        createdAt : serverTimestamp(),
        user: auth.currentUser.displayName,
        room: room,
      });

      setNewMessage("");
    }

  return (
    <div className='chat-app'>
        <form onSubmit={handleSubmit} className='new-message-form'>
          <input 
            className='new-message-input' 
            placeholder='Type your message here...'
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button type='submit' className='send-button'>
            Send
          </button>
        </form>
    </div>
  )
}

export default Chat