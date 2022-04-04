import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react'
import { auth, db } from './Firebase';

function SendMessages() {
    const messagesCollectionRef = collection(db,"Messages")
    const [Message, setMessage] = useState("")
    const [UID,setUID] = useState(null)
    
    async function sendMessage(e){
        e.preventDefault()
        setUID(auth.currentUser.uid)
        UID? pushdata() : console.log("try again")
    }
    async function pushdata(){
        await addDoc(messagesCollectionRef, {uid: UID, text: Message})
    }

  return (
    <div>
        <form onSubmit={sendMessage}>
            <input value={Message} onChange={(e)=>setMessage(e.target.value)} placeholder="message..."></input>
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default SendMessages