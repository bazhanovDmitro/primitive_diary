import { db, auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export const CreateArticle = async (header, text) => {
  const userID = auth.currentUser.uid;
  const id = uuidv4();
  const articleRef = doc(db, `articles`, id);

  return setDoc(articleRef, {
    user: userID,
    header: header,
    text: text,
  });
};
