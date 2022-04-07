import s from "./switcher.module.scss";

export default function Switcher({ style, buttons, visible, activeButton }) {
  if (visible) {
    return (
      <div className={style ? style.switcher : s.switcher}>
        {buttons.map((button) => (
          <button
            key={button.text}
            className={activeButton === button.text ? s.active : s.button}
            onClick={button.onClick}
          >
            {button.text}
          </button>
        ))}
      </div>
    );
  }
  return null;
}
