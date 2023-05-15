import styles from "./ContentBox.module.css";

export default function ContentBox(props) {

  const getBackgroundColor = () => {
    if (props.bg === "white") {
      return styles.whiteBG;
    }
    if (props.bg === "dark") {
      return styles.darkBG;
    }

    return null;
  };

  const getWidth = () => {
    if (props.width === "70") {
      return styles.contentBox_W70;
    }

    if (props.width === "50") {
      return styles.contentBox_W50;
    }

    if (props.width === "30") {
      return styles.contentBox_W30;
    }

    return null
  };

  return (
    <div
      className={`${styles.contentBox} ${getBackgroundColor()} ${getWidth()}`}
    >
      {props.children}
    </div>
  );
}
