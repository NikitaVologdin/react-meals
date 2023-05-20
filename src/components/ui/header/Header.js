import styles from "./Header.module.css";
import Cart from "../../cart/Cart.js";
import {useContext} from 'react'
import {CartContext} from '../../../store/CartContext'

export default function Header(props) {
  const ctx = useContext(CartContext)
  return (
    <header className={styles.header}>
      <div className={styles.header__heading}>
        <h1>ReactMeals</h1>
      </div>
      <div className={styles.header__cart}>
        <Cart isCartOpen={props.isCartOpen} onOpenCart={props.onOpenCart} amount={ctx.amount}/>
      </div>
    </header>
  );
}
