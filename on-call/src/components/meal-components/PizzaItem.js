import React from "react";
import { Link } from "react-router-dom";

const PizzaItem = () => {
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col mb-10">
      <h1 className="text-5xl mb-2">Pizza</h1>
      <h3 className="text-l mb-5">Pizza</h3>
      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1">Pepperoni Feast</h3>
          <p className="">£10.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p> Double Pepperoni, Extra Mozzarella Cheese</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1">Marghertia</h3>
          <p className="">£8.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p> Mozzarella Cheese, Tomato Sauce</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1">Meat Feast</h3>
          <p className="">£12.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p>Spicy Pork, Ham, Pepperoni, Seasoned Minced Beef</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1">The Meaty One</h3>
          <p className="">£15.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p>Pepperoni, Spicy Pork, Seasoned Minced Beef, Smoked Bacon, Chicken</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1">Beef Sizzler</h3>
          <p className="">£18.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p>Green Chillies, Jalapenos, Red Onions, Roquito Peppers, Seasoned Minced Beef</p>
        </div>
      </div>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Back
        </button>
      </Link>
    </div>
  );
};

export default PizzaItem;
