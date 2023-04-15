import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,

  
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../Assets/logo.png';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  
    return (
      <div className='fixed   w-full h-[45px] flex justify-between items-center px-4 bg-[#34235b] text-gray-300'>
        <div>
          <img src={Logo} alt='Logo Image' style={{ width: '60px' }}  />
        </div>
  
        {/* menu */}
       
        <ul className='hidden md:flex hover duration-300'>
     
          <li>
            <a href='/'>Home </a>
          </li>
          <li>
          <a href='/about'>About </a>
          </li>
          <li>
          <a href='/skills'>Skills </a>
          </li>
          <li>
          <a href='/Experience'>Expereince </a>
          </li>
          <li>
          <a href='/work'>Work </a>
          </li>
    
          <li>
          <a href='/contact'>Contact </a>
          </li>
        
        </ul>
       
  
        
        <div onClick={handleClick} className='md:hidden'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
  
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
          <li className='py-6 text-4xl '>
          <a href='/'>Home </a>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <a href='/about'>About </a>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <a href='/skills'>Skills </a>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <a href='/work'>Work </a>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <a href='/contact'>Contact </a>
          </li>
        </ul>
  
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[200px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/sayraj-kazi-844188177/'
              >
                Linkedin <FaLinkedin size={25} />
              </a>
            </li>
            <li className='w-[200px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0d0b11]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/SayrajKazi'
              >
                Github <FaGithub size={25} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
              </a>
            </li>
            <li className='w-[200px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1b6d5b]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                
                href ='https://d.docs.live.net/73ec10c42062c552/Documents/srajk23@outlook.com'
              >
                srajk23@outlook.com <HiOutlineMail size={0} />
              </a>
            </li>
            <li className='w-[200px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://drive.google.com/file/d/1mK39uTPbGpIwroxNcB56moRJeezGr5iE/view?usp=sharing'
              >
                Resume <BsFillPersonLinesFill size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  