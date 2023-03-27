import "./index.css";
import CheckOut from "./components/CheckOut";
import Menu from "./components/Menu";
import meals from "./components/Meals";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { Pizza } = meals;
  const onAdd = (Pizza) => {
    const exist = cartItems.find((menuId) => menuId.id === Pizza.id);
    if (exist) {
      const newCartItems = cartItems.map((menuId) =>
        menuId.id === Pizza.id ? { ...exist, qty: exist.qty + 1 } : menuId
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...Pizza, qty: 1 }];
      setCartItems(newCartItems);
    }
  };
  const onRemove = (Pizza) => {
    const exist = cartItems.find((menuId) => menuId.id === Pizza.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((menuId) => menuId.id !== Pizza.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((menuId) =>
        menuId.id === Pizza.id ? { ...exist, qty: exist.qty - 1 } : menuId
      );
      setCartItems(newCartItems);
    }
  };
  return (
    <div className="bg-[#000] h-screen">
      <Home />
      {/* <Menu
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        Pizza={Pizza}
      />
      <CheckOut cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> */}
    </div>
  );
}

export default App;
