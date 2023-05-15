import styles from "./Header.module.css";
import Cart from "../../cart/Cart.js";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header__heading}>
        <h1>ReactMeals</h1>
      </div>
      <div className={styles.header__cart}>
        <Cart isCartOpen={props.isCartOpen} onOpenCart={props.onOpenCart} />
      </div>
    </header>
  );
}
