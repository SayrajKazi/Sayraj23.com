import React from 'react';

import workout from '../Assets/workout.png';
import Smart from '../Assets/smart.jpeg';
import Jobin from '../Assets/Jobin.png';
import Webshop from '../Assets/webshop.png';
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1a0136]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline v  text-pink-600  border-b-4  border-gray-400'>
            Work
          </p>
      
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Smart})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                 Online Business Help Desk Application
              </span>
              <p>
                 Javascript  HTML  CSS
              </p>
              <div className='pt-8 text-center'>
                
                <a href='https://github.com/SayrajKazi/SmartHelp-Online-Support-Project/tree/master/SmartStudents-main'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href= 'https://drive.google.com/file/d/1vbWoERq-ynVuCOOfCqj9JQmPcSvfQ2AI/view?usp=sharing'  >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo 
                  </button>
                </a>

              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workout})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Workout TodoList
              </span>
              <p>
                 SWIFT
              </p>
              <div className='pt-8 text-center'>
                
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href='https://drive.google.com/file/d/1ZzufV4hnx_jBLeq5OVRWvWLXP2AlN_Mt/view?usp=sharing'  >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo2 
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Jobin})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JobInventory
              </span>
              <p>
                 ReactJS + Java Spring
              </p>
              <div className='pt-8 text-center'>
                
                <a href='https://github.com/SayrajKazi/JobIn--Find-Jobs-Hire-Talent-and-learn-new-Skills-'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href='https://drive.google.com/file/d/1uGn_MR9HzkuQA-1RS9Tgq6CBIj7WZDKg/view?usp=sharing'  >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo2 
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Webshop})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                WebShop with Stripe payments
              </span>
              <p>
                 ReactJS + CommerceJs
              </p>
              <div className='pt-8 text-center'>
                
                <a href='https://github.com/SayrajKazi/Webshop'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a href='https://drive.google.com/file/d/1pmSq2u1lfYBMD8R-oE_6rUyxPhahlCpW/view?usp=sharing'  >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    demo2 
                  </button>
                </a>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    
  );
};

export default Work;
