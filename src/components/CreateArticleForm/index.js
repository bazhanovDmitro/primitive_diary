import { CreateArticle } from "../../services/Articles";
import style from "./articleForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateArticleForm() {
  const [requestInProgress, setProgress] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setProgress(true);
    CreateArticle(event.target[0].value, event.target[1].value)
      .then(() => navigate(`/diary`))
      .finally(() => setProgress(false));
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.header}
        placeholder="Header"
        disabled={requestInProgress}
      />
      <textarea
        className={style.textarea}
        placeholder="Type your text here"
        disabled={requestInProgress}
      />
      <button
        className={style.submit}
        type="submit"
        disabled={requestInProgress}
      >
        Submit
      </button>
    </form>
  );
}
