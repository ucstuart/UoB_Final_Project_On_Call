import React from "react";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col ml-10 mb-10">
      <h1 className="text-center text-4xl mb-20 mt-5 text-dec">Meals</h1>
      <div className=" w-100 h-10 mb-10 text-2xl"><Link to='/Pizzaitem'>Pizzas</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl"><Link to='/Burgers'>Burgers</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl"><Link to='Chicken'>Chicken</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl"><Link to='Wraps'>Wraps</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl"><Link to='Sandwiches'>Sandwiches</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl"><Link to='Deserts'>Deserts</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl"><Link to='Drinks'>Drinks</Link></div>
    </div>
  );
};
export default SideNav;
