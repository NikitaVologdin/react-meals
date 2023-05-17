import styles from "./OpenedCartItem.module.css";
import QuantityControls from "./QuantityControls";
import Hr from "../../ui/hr/HorizontalLine";

export default function OpenedCartItem(props) {
  const quantityChangeHandler = (event) => {
    props.dispatch({
      type: "QUANTITY_CHANGE",
      id: props.id,
      amount: event.target.value,
    });
  };
  return (
    <>
      <div className={styles.openCartItem}>
        <div className={styles.description}>
          <h5 className={styles.description__heading}>{props.name}</h5>
          <div className={styles.description__priceAndQuantity}>
            <span className={styles.priceAndQuantity__price}>
              {props.price}
            </span>
            <form className={styles.priceAndQuantity__form}>
              <input
                className={styles.priceAndQuantity__quantity}
                type="text"
                value={props.amount}
                onChange={quantityChangeHandler}
              />
            </form>
          </div>
        </div>
        <div className={styles.openCartItem__quantityControls}>
          <QuantityControls dispatch={props.dispatch} id={props.id} />
        </div>
      </div>
      <div className={styles.openCartItem__hr}>
        <Hr color="red" />
      </div>
    </>
  );
}
