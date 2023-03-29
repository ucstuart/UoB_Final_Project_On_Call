import React from "react";
import PizzaCard from './PizzaCard'
const Menu = (props) => {
  const { cartItems, Pizza, onAdd, onRemove } = props;
  return (
    <div className="w-4/5 h-full bg-[#fff] flex mr-0 flex-col mb-10 md:w-1/5 md:mr-5">
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
