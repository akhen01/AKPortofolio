import React from 'react'
import Photo from "../assets/Photos/Alex.png"
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <div id='intro' className="w-full items-center justify-center text-center bg-custom mt-14">
        
      <div className='flex flex-col bg-gradient-to-l from-gray-800 via-gray-800  to-green-800 bg-custom'>
            
        <div className='flex justify-around items-end'>
          <div className='w-2/3 overflow-hidden mt-14'>
            <img className="rounded-3xl z-50" src={Photo} alt="" />
          </div>
          <div className='w-2/3 p-4'>
            <div className=' z-20 text-4xl md:text-8xl text-green-300 font-bold font-teko my-6 big-text-shadow '>
              <h1 className='flex'>

              <p className='mr-4 md:mr-8'>NETSA</p>   
              <p className=''>LESAN</p> 
              </h1>
              <p >STUDIO</p> 
            </div>
                
            <p className='text-start text-green-200 '>
              Hello there!
            </p>
            <p className='text-start md:text-xl text-green-900 flex justify-start items-end font-bold'>
              <p>I&apos;m </p>  
              <p className='ml-2 text-3xl md:text-5xl font-extrabold'>
                    ALEXANDER BRHANE
              </p> 
            </p>
            <p className='text-start text-2xl md:text-3xl text-green-800 my-6'>
              Web Developer
            </p>
            <Link to={"https://www.instagram.com/neln_studio"} className='text-gray-300 bg-green-900 p-1 px-2 rounded-2xl text-center hover:bg-black hover:text-green-300'>
              Contact me
            </Link>

                
          </div>
              
        </div>
      </div>
    </div>

  )
}

export default Intro