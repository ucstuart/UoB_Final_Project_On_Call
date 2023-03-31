import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { BsBag} from "react-icons/bs";
import { MdOutlineMoped } from "react-icons/md";
import { Link } from "react-router-dom";
import Pixie from './images/image (2).png'

const SecondNav = () => {
  return (
     <nav className="flex flex-col h-1/10 justify-between bg-[#fff] md:flex-row">
        <div className="flex">
          <div>
            <Link to="/">
              <div className="p-5 bg-[#fff] border-r-2 py-8"><img className='max-h-10' src={Pixie} alt="pixielogo"></img></div>
            </Link>
          </div>
          <div className="p-5 bg-[#fff] flex flex-col border-r-2">
            {" "}
            <div className="flex justify-evenly">
              <AiOutlineStar /> 5.0
            </div>
            <Link to="Review">
              <div className="underline">10 Reviews</div>
            </Link>
          </div>
          <div className="p-5 bg-[#fff] border-r-2">
            <div className="flex justify-evenly">
              <BsBag /> 25 Mins
            </div>{" "}
            <p>Collection</p>
          </div>
          <div className="p-5 bg-[#fff]">
            <div className="flex justify-evenly">
              <MdOutlineMoped /> 60 Mins
            </div>
            <p>Delivery</p>
          </div>
        </div>
        <div className="flex justify-center py-5 mr-5">
         <Link to='Home'> <button className="bg-[#CF9FFF] px-20 py-5 rounded flex place-items-center text-xl dropdownDefaultButton"data-dropdown-toggle="dropdown" type="button">
            <MdOutlineMoped />
            Delivery
          </button></Link>
        </div>
      </nav>
  )
}

export default SecondNav