import Card from "../../components/Card";
import ContentHolder from "../../components/ContentHolder";
import GoogleSignIn from "../../components/GoogleSignButton";
import style from "./signIn.module.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) navigate(`/diary`);
    });
  }, [navigate]);

  return (
    <ContentHolder>
      <Card style={style}>
        <GoogleSignIn />
      </Card>
    </ContentHolder>
  );
}
