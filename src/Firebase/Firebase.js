import {initializeApp} from "firebase/app"
//import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdtVZ639PsiVL3Qybh2cX4H4uUPcpPscU",
  authDomain: "firestoretutorial-25e2b.firebaseapp.com",
  projectId: "firestoretutorial-25e2b",
  storageBucket: "firestoretutorial-25e2b.appspot.com",
  messagingSenderId: "332587887843",
  appId: "1:332587887843:web:ce95b4de9962830de2e9d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore();

export {app};