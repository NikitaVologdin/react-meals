import { useContext } from "react";
import Header from "./components/ui/header/Header";
import About from "./components/about/About";
import ItemsList from "./components/items/items-list/ItemsList";
import OpenedCart from "./components/cart/opened-cart/OpenedCart";
import { CartContext } from "./store/CartContext";
import "./App.css";

function App() {
  const ctx = useContext(CartContext);

  return (
    <div className="App">
      {ctx.isCartOpen && (
        <OpenedCart isCartOpen={ctx.isCartOpen} onOpenCart={ctx.setOpenCart} />
      )}
      <Header isCartOpen={ctx.isCartOpen} onOpenCart={ctx.setOpenCart} />
      <main>
        <section>
          <About/>
        </section>
        <section>
          <ItemsList list={ctx.DB} />
        </section>
      </main>
    </div>
  );
}

export default App;
