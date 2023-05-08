import React from 'react';
import Typed from 'react-typed';  

const Hero = () => {
  return (
    <div className='text-white '>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#33d3a0] font-medium p-2'>THIS IS JUST A TEST</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-medium md:py-6 '> This is a test</h1>
        <div className='flex justify-center items-center '>
            <p className='md:text-5xl sm:4xl text-xl font-light py-4'>Fast, Flexible financing for</p>
            <Typed className='md:text-5xl sm:4xl text-xl font-semibold  md:pl-4 pl-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#33d3a0]'
            strings={['BTB','BTC', 'SASS']} 
            typeSpeed={120} 
            backSpeed={140} 
            loop />
        </div>
        <p className='md:text2xl text-xl font-bold text-gray-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illum?</p>
        <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-[200px] rounded-md font-medium my-6 mx-auto py-3 transition duration-300 ease-in-out hover:scale-110'>Get Started</button>  
      </div>
    </div>
  ) 
}

export default Hero
