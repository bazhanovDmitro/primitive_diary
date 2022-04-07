import s from "./diary.module.scss";
import ListItem from "../../components/ListItem";
import { useOutletContext } from "react-router-dom";

export default function List({ style }) {
  const [articles] = useOutletContext();

  return (
    <div className={style ? style.list : s.list}>
      {articles.map((article) => (
        <ListItem key={article.id} header={article.header} />
      ))}
    </div>
  );
}
