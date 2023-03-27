import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

export const Review = () => {
  return (
    <div className=' app-contanier h-screen flex justify-center'>
      <div className='h-full bg-[#fff] w-2/5 mt-5 mr-5'>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Sarah</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Luke</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Adam</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Stuart</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Arshad</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Marilena</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Samuel</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Chris</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Nateyana</h2>
        </div>
        <div className='border-b-2 flex mt-10 ml-10 mr-10 pb-5'>
          <div className='flex mr-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <h2 className='flex'>Lucas</h2>
        </div>
      </div>
      <div className='h-1/5 bg-[#fff] w-1/5 mt-5 px-5 flex flex-col items-center'>
        <h1 className='text-5xl'>5.0</h1>
        <h2>(10 Reviews)</h2>
        <h3>Highley Recommended </h3>
        <div className='flex border-b-2 pb-10'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>

      </div>

    </div>
  )
}
 export default Review