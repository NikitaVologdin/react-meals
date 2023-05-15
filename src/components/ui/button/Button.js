import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={`
        ${styles.button} 
        ${props.position === "center" ? styles.button_center : null} 
        ${props.outlined === true ? styles.button_outlined : null}
        ${props.short === true ? styles.button_short : null}
      `}
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  );
}
