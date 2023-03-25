import React from 'react'
import { Link } from 'react-router-dom'

const Drinks = () => {
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col mb-10 ml-10">
      <h1 className="text-5xl mb-10 mt-5">Pizza</h1>

      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1 text-xl">Marghertia</h3>
          <p className="ml-auto mr-5">£8.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p className="text-sm"> Mozzarella Cheese, Tomato Sauce</p>
        </div>
      </div>
<div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1 text-xl">Pepperoni Feast</h3>
          <p className="ml-auto mr-5">£10.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p className="text-sm"> Double Pepperoni, Extra Mozzarella Cheese</p>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1 text-xl">Meat Feast</h3>
          <p className="ml-auto mr-5">£12.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p className="text-sm">Spicy Pork, Ham, Pepperoni, Seasoned Minced Beef</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1 text-xl">The Meaty One</h3>
          <p className="ml-auto mr-5">£15.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p className="text-sm">Pepperoni, Spicy Pork, Seasoned Minced Beef, Smoked Bacon, Chicken</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between">
          <h3 className="mb-1 text-xl">Beef Sizzler</h3>
          <p className="ml-auto mr-5">£18.00</p>
          <button className="border-2 border-violet-800 px-3 mr-2 text-sm">
            ADD
          </button>
        </div>
        <div>
          <p className="text-sm">Green Chillies, Jalapenos, Red Onions, Roquito Peppers, Seasoned Minced Beef</p>
        </div>
      </div>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Back
        </button>
      </Link>
    </div>
  )
}

export default Drinks