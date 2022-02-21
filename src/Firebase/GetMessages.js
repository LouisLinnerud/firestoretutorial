import { getFirestore, collection, getDocs} from "firebase/firestore";
import { app } from "./Firebase";
import { useState, useEffect} from "react";

function GetMessages(){
    
    const db = getFirestore(app);
    const [Messages, setMessages] = useState([]);
    const MessagesCollectionRef = collection(db, "Messages");

    useEffect(()=>{
        const getMessages = async () => {
            const data = await getDocs(MessagesCollectionRef)
            setMessages(data.docs.map( (d) => ({...d.data(), id: d.id,photoURL: d.photoURL}) ))
        }
        getMessages();
    })
    
    return(
        <div>
            {Messages.map(({id,Text,Bruker,photoURL})=>{
                return(
                    <div key={id}>
                        <p>{id}</p>
                        <p>{Bruker}</p>
                        <p>{Text}</p>
                        <img src={photoURL} alt="" />
                        
                    </div>
                )
            })}
        </div>
    )
}
export default GetMessages;