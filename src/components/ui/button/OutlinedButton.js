import styles from "./OutlinedButton.module.css";

export default function OutLinedButton(props) {
  return (
    <button className={styles.outLinedButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
