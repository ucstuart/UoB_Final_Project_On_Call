import React from "react";
const SideNav = () => {
  return (
    <div className="w-1/5 h-full bg-[grey] flex flex-col mb-6 mb-10">
      <h1 className="text-center text-4xl mb-20 mt-5 text-dec">Meals</h1>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl">Pizzas</div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl">Burgers</div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl">Chicken</div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl">Wraps</div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl">Sandwiches</div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl">Deserts</div>
      <div className="bg-[grey] w-100 h-10 mb-10 text-2xl">Drinks</div>

    </div>
  )
}
export default SideNav;
