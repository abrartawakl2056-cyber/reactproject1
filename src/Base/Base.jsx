import React from 'react'
import avatar from '../assets/avataaars.svg';

export default function Base() {
  return (
    <>
  <div className="base bg-teal-500 h-170 position-relative overflow-hidden">
    <div className="image w-1/2 text-center mx-auto h-1/2     ">
  <img src={avatar} className="w-full h-full mt-30" alt="avataaar" />
  <h1 className='text-4xl text-white font-bold uppercase mt-2'>start Framework</h1>
  <div className="lines mx-auto mt-3 flex justify-center items-center  ">
      <div className="line w-20 bg-white h-1 me-4 "></div>
      <i class="fa-solid fa-star text-white me-4"></i>
      <div className="line w-20 bg-white h-1  "></div>


  </div>
  <h6 className="text-white mt-3">Graphic Artist - Web Designer - Illustrator</h6>
    </div>
</div>
   
    
    </>
  )
}
