import style from "./article.module.scss";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { ConverTimeToMDY } from "../../components/utils/time";
import { LoadArticle } from "../../services/Articles";
import ContentHolder from "../../components/ContentHolder/index";

export default function Article() {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);

  const navigate = useNavigate();
  const { articleID } = useParams();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      LoadArticle(articleID)
        .then((article) => {
          if (user.uid !== article.user) navigate("/diary");
          setArticle(article);
          setLoading(false);
        })
        .catch(() => navigate("/diary"));
    });
  }, [navigate, articleID]);

  return (
    <>
      <Loader spinner={"Loading article"} loading={loading} />
      <ContentHolder>
        <div className={style.holder}>
          <span className={style.timestamp}>
            {ConverTimeToMDY(article?.time)}
          </span>
          <div className={style.article}>
            <h1 className={style.header}>{article?.header}</h1>
            <p className={style.text}>{article?.text}</p>
          </div>
        </div>
      </ContentHolder>
    </>
  );
}
