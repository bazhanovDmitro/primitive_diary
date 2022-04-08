import s from "./listItem.module.scss";
import Hint from "./Hint";
import { useNavigate } from "react-router-dom";

export default function ListItem({ style, header, date, id }) {
  const navigate = useNavigate();

  return (
    <div
      className={style ? style.item : s.item}
      onClick={() => navigate(`${id}`)}
    >
      <Hint date={date} />
      <h1 className={style ? style.header : s.header}>{header}</h1>
    </div>
  );
}
