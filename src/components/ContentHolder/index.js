import style from "./style.module.scss";

export default function ContentHolder({ children }) {
  return <div className={style.contentHolder}>{children}</div>;
}
