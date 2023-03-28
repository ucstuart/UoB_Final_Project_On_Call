import React from "react";
import PizzaCard from './PizzaCard'
const Menu = (props) => {
  const { cartItems, Pizza, onAdd, onRemove } = props;
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col mb-10 ml-10">
      <h1 className="ml-5 text-4xl mb-20 mt-5">Pizza</h1>
      {Pizza.map((Pizza) => (
        <PizzaCard
          key={Pizza.id}
          Pizza={Pizza}
          item={cartItems.find((menuId) => menuId.id === Pizza.id)}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export { Menu };
