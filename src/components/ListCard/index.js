import style from "./card.module.scss";
import { ConverTimeToMDY } from "../utils/time";

export default function ListCard({ header, text, date }) {
  return (
    <div className={style.card}>
      <span className={style.time}>{ConverTimeToMDY(date)}</span>
      <h1 className={style.header}>{header}</h1>
      <p className={style.text}>{text}</p>
    </div>
  );
}
