import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const google = new GoogleAuthProvider();

export const authWithGoogle = async () => {
  return signInWithPopup(auth, google);
};
