import s from "./diary.module.scss";
import ListItem from "../../components/ListItem";
import ListCard from "../../components/ListCard";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../App";

export default function List({ style }) {
  const [articles] = useOutletContext();
  const mode = useContext(Context);

  return (
    <div className={style ? style.list : s.list}>
      {articles.map((article) => {
        if (mode.value === `List`) {
          return (
            <ListItem
              key={article.id}
              header={article.header}
              date={article.time}
            />
          );
        } else if (mode.value === `Cards`) {
          return (
            <ListCard
              key={article.id}
              text={article.text}
              header={article.header}
              date={article.time}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
