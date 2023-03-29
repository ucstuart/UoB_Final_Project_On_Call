import React from "react";
import { Menu } from "./Menu";
import { CheckOut } from "./CheckOut";
import { meals } from "./Meals";
import { useState } from "react";
import SecondNav from "./SecondNav";

const Home = () => {
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
    <div>
      <div className="flex flex-col justify-center items-center mt-10 md:flex-row md:items-start">
        <Menu
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          Pizza={Pizza}
        />
        <CheckOut cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
};

export default Home;
