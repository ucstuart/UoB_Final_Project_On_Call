import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { MdOutlineMoped } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <nav className='flex h-1/10 justify-between bg-[#fff]'>
      <div className='flex'>
      <div><div className='p-5 bg-[#fff]'>Pixxy Pizzas</div></div>
        <div className='p-5 bg-[#fff] flex flex-col border-r-2'> <div className='flex justify-evenly'><AiOutlineStar /> 5.0</div>
      <Link to='Review'><div className='underline'>10 Reviews</div></Link></div>
      <div className='p-5 bg-[#fff] border-r-2'><div className='flex justify-evenly'><BsBag /> 25 Mins</div> <p>Collection</p></div>
      <div className='p-5 bg-[#fff]'><div className='flex justify-evenly'><MdOutlineMoped /> 60 Mins</div><p>Delivery</p></div>
      </div>
      <div className='flex justify-center py-5 mr-5'><button className='bg-[red] px-20 rounded flex'><MdOutlineMoped/>Delivery</button></div>


    </nav>
  )
}

export default Home