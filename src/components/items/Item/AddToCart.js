import styles from "./AddToCartForm.module.css";
import Button from "../../ui/button/Button";

export default function AddToCart(props) {
  const clickHandler = (event) => {
    event.preventDefault();

    const input = event.target.form[0].value;
    const match = input.match(/\d/gi);
    const result = +match.join("");
    if (result === undefined || result === null) {
      return console.log("invalid input");
    }
    if (result) {
      props.onDispatch({
        type: `ADD_TO_CART`,
        item: { id: props.id, amount: result },
      });
    }
  };

  return (
    <div className={styles.addToCart}>
      <div className={styles.inputGroup}>
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" defaultValue={"x1"} />
      </div>
      <Button position={"center"} clickHandler={clickHandler}>
        + Add
      </Button>
    </div>
  );
}
