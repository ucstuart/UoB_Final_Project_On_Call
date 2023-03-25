import "./index.css";
import SideNav from "./components/SideNav";
import CheckOut from "./components/CheckOut";
import Menu from "./components/Menu";
import meals from "./components/Meals";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { Pizza } = meals;
  const onAdd = (Pizza) => {
    const exist = cartItems.find((menuId) => menuId.id === Pizza.id);
    if (exist) {
      const newCartItems = cartItems.map((menuId) =>
        menuId.id === Pizza.id ? { ...exist, qty: exist.qty + 1 } : menuId
      );
    }
  };
  const onRemove = (Pizza) => {};
  return (
    <div className="flex justify-center h-screen app-container">
      <SideNav />
      <Menu onAdd={onAdd} onRemove={onRemove} Pizza={Pizza} />
      <CheckOut />
    </div>
  );
}

export default App;
