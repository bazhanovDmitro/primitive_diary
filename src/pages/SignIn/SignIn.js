import Card from "../../components/Card";
import ContentHolder from "../../components/ContentHolder";
import GoogleSignIn from "../../components/GoogleSignButton";
import style from "./signIn.module.scss";

export default function SignIn() {
  return (
    <ContentHolder>
      <Card style={style}>
        <GoogleSignIn />
      </Card>
    </ContentHolder>
  );
}
