import React from "react";
import { Link } from "react-router-dom";

const PizzaItem = () => {
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col mb-10">
      <h1 className="text-5xl">Pizza</h1>
      <h3 className="text-xl">Pizza</h3>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Home
        </button>
      </Link>
    </div>
  );
};

export default PizzaItem;
