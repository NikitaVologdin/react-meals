import { useState, createContext, useReducer } from "react";

const DB = [
  { name: "Burger", description: "lorem10", price: 9.99, id: "1" },
  { name: "Taco", description: "lorem15", price: 9.99, id: "2" },
  { name: "Sandwich", description: "lorem20", price: 9.99, id: "3" },
  { name: "Sushi", description: "lorem10", price: 12.99, id: "4" },
];

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return makeOrder(state, action.item);
  }

  if (action.type === "REMOVE_ONE") {
    const newState = JSON.parse(JSON.stringify(state));
    const order = newState.order;
    // console.log('order', order)
    const item = order.find((e) => e.id === action.id);
    // console.log('item', item)
    item.amount--;
    if(item.amount < 1) {
      const index = order.findIndex(e => e.id === item.id)
      order.splice(index, 1)
    }
    newState.totalPrice = countTotalPrice(order);
    newState.totalAmount = countTotalAmount(order);
    return newState;
  }

  if (action.type === "ADD_ONE") {
    const newState = JSON.parse(JSON.stringify(state));
    const order = newState.order;
    const item = order.find((e) => e.id === action.id);
    item.amount++;
    newState.totalPrice = countTotalPrice(order);
    newState.totalAmount = countTotalAmount(order);
    return newState;
  }

  if (action.type === "QUANTITY_CHANGE") {
    const newState = JSON.parse(JSON.stringify(state));
    const order = newState.order;
    const item = order.find((e) => e.id === action.id);
    item.amount = action.amount;
    newState.totalPrice = countTotalPrice(order);
    newState.totalAmount = countTotalAmount(order);
    return newState;
  }
};

const makeOrder = (currentState, newItem) => {
  const newState = JSON.parse(JSON.stringify(currentState));
  const order = newState.order;
  const itemInOrder = order.find((item) => item.id === newItem.id);

  if (!itemInOrder) {
    const dbItem = DB.find((e) => e.id === newItem.id);
    newItem.name = dbItem.name;
    newItem.price = dbItem.price;
    order.push(newItem);
  }

  if (itemInOrder) {
    itemInOrder.amount += newItem.amount;
  }

  newState.totalPrice = countTotalPrice(order);
  newState.totalAmount = countTotalAmount(order);

  return newState;
};

const countTotalPrice = (order) => {
  if (order.length > 0) {
    const totalPrice = order.reduce((acc, e) => acc + +e.price * +e.amount, 0);
    return totalPrice.toFixed(2)
  }
  return 0;
};

const countTotalAmount = (order) => {
  if (order.length > 0) {
    return order.reduce((acc, e) => acc + e.amount, 0);
  }

  return 0;
};

export const CartContext = createContext({
  isCartOpen: false,
  setOpenCart: () => {},
  order: [],
  dispatch: () => {},
  amount: 0,
});

const CartContextProvider = (props) => {
  const [isCartOpen, setOpenCart] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, {
    order: [],
    totalPrice: 0,
    totalAmount: 0,
  });

  return (
    <CartContext.Provider
      value={{
        DB,
        isCartOpen,
        setOpenCart,
        dispatch,
        order: state.order,
        total: state.totalPrice,
        amount: state.totalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
