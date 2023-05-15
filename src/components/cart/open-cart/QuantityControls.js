import styles from "./QuantityControls.module.css";
import OutlinedButton from "../../ui/button/OutlinedButton";

export default function QuantityControls(props) {

  const addOne = (event) => {
    props.dispatch({type:'ADD_ONE', id: props.id});
  };

  const removeOne = (event) => {
    props.dispatch({ type: "REMOVE_ONE", id: props.id});
  };

  return (
    <div className={styles.quantityControls}>
      <OutlinedButton onClick={addOne}>+</OutlinedButton>
      <OutlinedButton onClick={removeOne}>–</OutlinedButton>
    </div>
  );
}
