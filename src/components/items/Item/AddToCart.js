import styles from "./AddToCartForm.module.css";
import Button from "../../ui/button/Button";

export default function AddToCart(props) {
  const clickHandler = (event) => {
    event.preventDefault();
    const input = event.target.form[0].value;
    const result = input.match(/\d/ig);
    if(result === undefined || result === null) {
      return console.log("invalid input");
    }
    if (result.length > 0 ) {
      return props.onDispatch({
        type: `ADD_TO_CART`,
        item: { id: props.id, amount: +result.join('') },
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
