import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./Firebase.js";

function MyLogin() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result))
      .catch((error) => console.log(error, "!!!!!im here!!!!"));
  };
  return (
    <div>
      <button type="button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}
export default MyLogin;
