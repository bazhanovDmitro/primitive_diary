import s from "./listItem.module.scss";
import Hint from "./Hint";

export default function ListItem({ style, header, date }) {
  return (
    <div className={style ? style.item : s.item}>
      <Hint date={date} />
      <h1 className={style ? style.header : s.header}>{header}</h1>
    </div>
  );
}
