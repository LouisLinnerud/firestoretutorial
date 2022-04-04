import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtYtjfPXpmCkgT1wBEKkkcQFJEcY-L3og",
  authDomain: "firestore-en-gang-til.firebaseapp.com",
  projectId: "firestore-en-gang-til",
  storageBucket: "firestore-en-gang-til.appspot.com",
  messagingSenderId: "744966579987",
  appId: "1:744966579987:web:0a0e5cf83bfe4b48da1ce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {app,auth,db};