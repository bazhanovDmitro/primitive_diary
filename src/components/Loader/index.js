import style from "./loader.module.scss";

export default function Loader({ spinner, loading }) {
  if (loading) return <div className={style.loader}>{spinner}</div>;
  else return null;
}
