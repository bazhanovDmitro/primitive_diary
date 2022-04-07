import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import style from "./style.module.scss";
import Loader from "../Loader/index";
import { useLocation } from "react-router-dom";
import Switcher from "../Switcher";

export default function Header() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(`List`);
  const [buttonsVisible, setVisible] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const name = user?.displayName;
      if (name) setUsername(name);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (pathname === `/diary`) {
      setVisible(true);
    }
  }, [pathname]);

  return (
    <>
      <Loader spinner={<h2>Loading diary</h2>} loading={loading} />
      <div className={buttonsVisible ? style.container : null}>
        <h1 className={style.header}>
          {username ? `${username}s` : `My`} Diary
        </h1>
        <Switcher
          visible={buttonsVisible}
          activeButton={mode}
          buttons={[
            { text: "List", onClick: () => setMode(`List`) },
            { text: "Cards", onClick: () => setMode(`Cards`) },
          ]}
        />
      </div>
    </>
  );
}
