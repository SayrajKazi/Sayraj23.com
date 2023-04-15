import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1a0136] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl text-pink-600 font-bold inline border-b-4 border-gray-400'>
              Who am I
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full h-80 grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
              <p> Bachelors in CS from DePaul University 2022</p>
            </div>
            <div>
              <p> I am passionate about problem solving. I want to utilize technology to improve the lives of others. 
            
                I am currently looking for opportunities to grow as software engineer and work on building softwares that improves us as humans.</p>  
            </div>
   
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-xl text-zinc-300 font-extralight '>
         
            <h2 classname='text-red-700'>  Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          
   
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring,  ExpressJS,
              MySQL, MongoDB, DynamoDB, Blockchain, AWS S3, MS SQL
            </span>
         
      
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, Scala, C, C++, HTML</span>
     
   
          
          </div>
          
      </div>
      
      
    </div>
    
    
  );
};

export default About;
