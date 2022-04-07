import ContentHolder from "../../components/ContentHolder/index";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoadArticles } from "../../services/Articles";
import Loader from "../../components/Loader";
import { auth } from "../../firebase";

export default function Diary() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      LoadArticles(user.uid)
        .then((articles) => setArticles(articles))
        .finally(() => setLoading(false));
    });
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <ContentHolder>
        <Outlet context={[articles, setArticles]} />
      </ContentHolder>
    </>
  );
}
