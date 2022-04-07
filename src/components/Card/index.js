export default function Card({ children, style }) {
  return <div className={style?.card}>{children}</div>;
}
