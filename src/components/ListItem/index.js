import s from "./listItem.module.scss";

export default function ListItem({ style, header, date }) {
  return (
    <div className={style ? style.item : s.item}>
      <h1 className={style ? style.header : s.header}>{header}</h1>
    </div>
  );
}
