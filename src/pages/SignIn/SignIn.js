import Card from "../../components/Card";
import GoogleSignIn from "../../components/GoogleSignButton";
import style from "./signIn.module.scss";

export default function SignIn() {
  return (
    <div>
      <Card style={style}>
        <GoogleSignIn />
      </Card>
    </div>
  );
}
