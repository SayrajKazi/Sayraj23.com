import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#1a0136] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/c93aa93c-29a7-446f-8092-1272bb445bc1" className='flex flex-col max-w-[600px] w-full'>

           <div className='pb-10'>
                <p className='text-4xl font-bold inline  text-pink-600  border-b-4  border-gray-400'>Reach Me</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - srajk23@outlook.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact

