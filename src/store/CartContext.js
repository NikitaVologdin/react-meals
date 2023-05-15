import { useState, createContext, useReducer } from "react";

const DB = [
  { name: "Burger", description: "lorem10", price: 9.99, id: "1" },
  { name: "Taco", description: "lorem15", price: 9.99, id: "2" },
  { name: "Sandwich", description: "lorem20", price: 9.99, id: "3" },
  { name: "Sushi", description: "lorem10", price: 12.99, id: "4" },
];

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return { order: makeOrderList(state.order, action.item) };
  }

  if (action.type === "REMOVE_ONE") {
    const newState = {order: [...state.order]};
    const item = newState.order.find((e) => e.id === action.id);
    item.amount--;
    return newState;
  }

  if (action.type === "ADD_ONE") {
    const newState = { order: [...state.order] };
    const item = newState.order.find((e) => e.id === action.id);
    item.amount++;
    return newState;
  }

  if(action.type === 'QUANTITY_CHANGE') {
    const newState = {order: [...state.order]}
    const item = newState.order.find(e => e.id === action.id)
    item.amount = action.amount
    return newState
  }
};

const makeOrderList = (orderList, newItem) => {
  const state = [...orderList];

  const itemInOrder = state.find((item) => item.id === newItem.id);

  if (!itemInOrder) {
    const dbItem = DB.find((e) => e.id === newItem.id);
    newItem.name = dbItem.name;
    newItem.price = dbItem.price;
    state.push(newItem);
  }

  if (itemInOrder) {
    itemInOrder.amount = itemInOrder.amount + newItem.amount;
  }
  return state;
};

const countTotal = (order) => {
  if (order.length > 0) {
    return order.reduce((acc, e) => acc + +e.price * +e.amount, 0);
  }
  return 0;
};

export const CartContext = createContext({
  isCartOpen: false,
  setOpenCart: () => {},
  order: [],
  dispatch: () => {},
});

const CartContextProvider = (props) => {
  const [isCartOpen, setOpenCart] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, { order: [] });

  return (
    <CartContext.Provider
      value={{
        DB,
        isCartOpen,
        setOpenCart,
        dispatch,
        order: state.order,
        total: countTotal(state.order),
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
