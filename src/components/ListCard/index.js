import style from "./card.module.scss";
import { ConverTimeToMDY } from "../utils/time";
import { useNavigate } from "react-router-dom";

export default function ListCard({ header, text, date, id }) {
  const navigate = useNavigate();

  return (
    <div className={style.card} onClick={() => navigate(`${id}`)}>
      <span className={style.time}>{ConverTimeToMDY(date)}</span>
      <h1 className={style.header}>{header}</h1>
      <p className={style.text}>{text}</p>
    </div>
  );
}
