import React from 'react'

export default function Banner() {
  return (
    <div className='px-[5vw] min-h-[70vh] flex w-full h-full items-start gap-3 justify-center text-white flex-col'>
        <span className='text-white font-medium text-3xl'>Farsana's World of Fascinating Moments</span>
        <span className="">Frame Your Moments, Artify Your Life</span>
        <button className=" bg-white px-8 py-2 rounded-[8px] text-black-100">Photo Frames</button>
    </div>
  )
}
