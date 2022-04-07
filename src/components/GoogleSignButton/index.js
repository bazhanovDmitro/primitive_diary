import style from "./style.module.scss";
import { authWithGoogle } from "../../services/Auth";
import { useState } from "react";

export default function GoogleSignIn() {
  const [inProgress, setProgress] = useState(false);

  const authenticate = () => {
    setProgress(true);
    authWithGoogle().finally(() => setProgress(false));
  };

  return (
    <button
      disabled={inProgress}
      className={style.button}
      onClick={() => authenticate()}
    >
      <span className={style.g}>G</span>Continue with Google
    </button>
  );
}
