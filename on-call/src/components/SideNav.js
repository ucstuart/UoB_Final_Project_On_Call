import React from "react";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="w-1/5 h-full bg-[grey] flex flex-col mb-6 mb-10">
      <h1 className="text-center text-4xl mb-20 mt-5 text-dec">Meals</h1>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl"><Link to='/Pizzaitem'>Pizzas</Link></div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl"> <Link>Burgers</Link></div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl"> <Link>Chicken</Link></div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl"> <Link>Wraps</Link></div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl"> <Link>Sandwiches</Link></div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl"> <Link>Deserts</Link></div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl"> <Link>Drinks</Link></div>
    </div>
  );
};
export default SideNav;