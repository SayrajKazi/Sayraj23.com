import React from 'react';


import { AiOutlineFire } from "react-icons/ai";

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#180929]'>

            {/*Container*/}
            <div  className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
     
          
            <p  className='text-violet-900  justify-center lg:text-2xl font-bold h-20 hover:bg-violet-200 rotate-300 duration-300  '>Welcome to my Profile</p>
            
            <h1  className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Sayraj Kazi
          </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#b4c2ef]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#bbc6e8] py-4 max-w-[700px]'>
          I’m a full-stack developer and tech ethusiast specializing in building software and digital applications. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white   px-4 py-2  flex items-center hover:bg-pink-600 hover:border-pink-600'>
          
            {' '}
            <a href='/work'> View Work </a>
          
            <span className='group-hover: duration-300'>
              <AiOutlineFire className='ml-3 ' />
             
            </span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;