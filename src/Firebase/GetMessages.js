import {  collection, getDocs} from "firebase/firestore";
import { db } from "./Firebase";
import { useState, useEffect} from "react";

function GetMessages(){
    console.log("GetMessages function was called");
    const [Messages, setMessages] = useState([]);
    const MessagesCollectionRef = collection(db, "Messages");

    useEffect(()=>{
        const getMessages = async () => {
            const data = await getDocs(MessagesCollectionRef)
            setMessages(data.docs.map( (d) => ({...d.data(), id: d.id}) ))
            //setMessages(data.docs.map( (d) => (d.data())));
            console.log(Messages);
        }
        getMessages();
    })
    
    return(
        <div>
            {Messages.map(({text,uid,id})=>{
                return(
                    <div key={id}>
                        <p>{uid}</p>
                        <p>{text}</p>
                        
                    </div>
                )
            })}
        </div>
    )
}
export default GetMessages;