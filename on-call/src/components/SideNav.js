import React from "react";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col ml-10 mb-10">
      <h1 className="ml-5 text-4xl mb-20 mt-5">Meals</h1>
      <div className=" w-100 h-10 mb-10 text-2xl ml-5"><Link to='/MenuItems'>Pizzas</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl ml-5"><Link to='/Burgers'>Burgers</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl ml-5"><Link to='Chicken'>Chicken</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl ml-5"><Link to='Wraps'>Wraps</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl ml-5"><Link to='Sandwiches'>Sandwiches</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl ml-5"><Link to='Deserts'>Deserts</Link></div>
      <div className=" w-100 h-10 mb-10 text-2xl ml-5"><Link to='Drinks'>Drinks</Link></div>
    </div>
  );
};
export default SideNav;
