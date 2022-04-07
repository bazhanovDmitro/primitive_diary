import style from "./articleForm.module.scss";

export default function CreateArticleForm() {
  return (
    <form className={style.form}>
      <input className={style.header} placeholder="Header" />
      <textarea className={style.textarea} placeholder="Type your text here" />
    </form>
  );
}
