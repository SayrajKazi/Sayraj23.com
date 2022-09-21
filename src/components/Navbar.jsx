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
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1a0136] text-gray-300'>
        <div>
          <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
        </div>
  
        {/* menu */}
        <ul className='hidden md:flex'>
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
          <a href='/work'>Work </a>
          </li>
          <li>
          <a href='/contact'>Contact </a>
          </li>
        </ul>
  
        
        <div onClick={handleClick} className='md:hidden z-10'>
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
          <li className='py-6 text-4xl'>
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
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/sayraj-kazi-844188177/'
              >
                Linkedin <FaLinkedin size={25} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/SayrajKazi'
              >
                Github <FaGithub size={25} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                
                href='https://outlook.live.com/mail/0/'
              >
                Email <HiOutlineMail size={25} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://docs.google.com/document/d/1iygHxM4GQXYd_sOA4Qi_Y_hxjZU0Awzf/edit?usp=sharing&ouid=107347956730002636875&rtpof=true&sd=true'
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
  