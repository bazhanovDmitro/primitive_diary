import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import style from "./style.module.scss";
import Loader from "../Loader/index";

export default function Header() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const name = user?.displayName;
      if (name) setUsername(name);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Loader spinner={<h2>Loading diary</h2>} loading={loading} />
      <h1 className={style.header}>{username ? `${username}s` : `My`} Diary</h1>
    </>
  );
}
