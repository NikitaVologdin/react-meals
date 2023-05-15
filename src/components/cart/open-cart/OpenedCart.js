import Modal from "../../ui/modal/Modal";
import ContentBox from "../../ui/containers/ContentBox";
import OpenCartItem from "./OpenCartItem";
import TotalAmount from "./TotalAmount";
import OrderOrClose from "../../ui/button/OrderOrClose";
import { useContext } from "react";
import { CartContext } from "./../../../store/CartContext";

export default function OpenCart(props) {
  const ctx = useContext(CartContext);
  const order = ctx.order;

  return (
    <Modal>
      <ContentBox bg="white" width="30">
        {order.map((item) => {
          return (
            <OpenCartItem
              name={item.name}
              price={item.price}
              amount={item.amount}
              key={item.id}
              id={item.id}
              dispatch={ctx.dispatch}
            ></OpenCartItem>
          );
        })}

        <footer>
          <TotalAmount total={ctx.total}/>
          <OrderOrClose
            isCartOpen={props.isCartOpen}
            onOpenCart={props.onOpenCart}
          />
        </footer>
      </ContentBox>
    </Modal>
  );
}
