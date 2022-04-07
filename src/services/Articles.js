import { db, auth } from "../firebase";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export const CreateArticle = async (header, text) => {
  const dateTime = new Date();

  const userID = auth.currentUser.uid;
  const id = uuidv4();
  const articleRef = doc(db, `articles`, id);

  return setDoc(articleRef, {
    user: userID,
    header: header,
    text: text,
    time: dateTime.getTime(),
  });
};

export const LoadArticles = async (user) => {
  const articlesCollectionRef = collection(db, `articles`);
  const articlesQuery = query(
    articlesCollectionRef,
    where(`user`, `==`, user),
    orderBy(`time`, `desc`)
  );
  const response = await getDocs(articlesQuery);
  return response.docs.map((article) => {
    return { ...article.data(), id: article.id };
  });
};
