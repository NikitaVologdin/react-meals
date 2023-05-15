import styles from "./Item.module.css";
import HorizontalLine from "../../ui/hr/HorizontalLine";
import AddToCart from "./AddToCart";
import ItemDescription from "./ItemDescription";
import { useContext } from "react";
import { CartContext } from "../../../store/CartContext";

export default function Item(props) {
  const ctx = useContext(CartContext);

  return (
    <div>
      <form>
        <div className={styles.item}>
          <ItemDescription
            name={props.name}
            description={props.description}
            price={props.price}
          />
          <AddToCart id={props.id} onDispatch={ctx.dispatch} />
        </div>
      </form>
      <HorizontalLine />
    </div>
  );
}
