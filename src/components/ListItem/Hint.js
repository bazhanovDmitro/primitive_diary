import style from "./listItem.module.scss";
import { ConverTimeToMDY } from "../utils/time";

export default function Hint({ date }) {
  return <div className={style.hint}>{ConverTimeToMDY(date)}</div>;
}
