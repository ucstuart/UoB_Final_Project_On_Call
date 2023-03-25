import React from "react";
import MenuItems from "./MenuItems";
const Menu= (props) => {
  const { Pizza } = props;
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col mb-10 ml-10">
      <h1 className="text-5xl mb-10 mt-5">Pizza</h1>
      {Pizza.map((Pizza) => (
        <MenuItems key={Pizza.id} Pizza={ Pizza } />
      ))}
    </div>
  );
};

export default Menu;
