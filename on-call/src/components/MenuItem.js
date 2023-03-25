import React from "react";
import MenuTester from "./menuTester";
const PizzaItem = (props) => {
  const { Pizza } = props;
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col mb-10 ml-10">
      <h1 className="text-5xl mb-10 mt-5">Pizza</h1>
      {Pizza.map((Pizza) => (
        <MenuTester key={Pizza.id} Pizza={ Pizza } />
      ))}
    </div>
  );
};

export default PizzaItem;
