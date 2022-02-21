import { getAuth } from "firebase/auth";
import { app } from "./Firebase.js";
//import {useAuthState} from "react-firebase-hooks/auth"

function MySignOut() {
  const auth = getAuth(app);
  //const [user] = useAuthState(auth);
  return (
    <div>
      <button type="button" onClick={() => auth.signOut}>
        Sign Out
      </button>
    </div>
  );
}
export default MySignOut;
