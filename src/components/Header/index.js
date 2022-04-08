import { useState, useEffect, useContext } from "react";
import { auth } from "../../firebase";
import style from "./style.module.scss";
import Loader from "../Loader/index";
import { useLocation } from "react-router-dom";
import Switcher from "../Switcher";
import { Context } from "../../App";

export default function Header() {
  const mode = useContext(Context);

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  // const [mode, setMode] = useState(`List`);
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
    } else {
      setVisible(false);
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
          activeButton={mode.value}
          buttons={[
            { text: "List", onClick: () => mode.setValue(`List`) },
            { text: "Cards", onClick: () => mode.setValue(`Cards`) },
          ]}
        />
      </div>
    </>
  );
}
