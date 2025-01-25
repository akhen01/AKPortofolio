import React from 'react'
import world from "../assets/greenabout.png"

function About() {
    const infoList = 
        {
            Name: "Alexander Brhane",
            From: "Eritrea",
            Address: "Calgary Alberta, Canada",
            Email: "lxndrbrhane@gmail.com",
            Instagram: "@558alex1"

        }
    
  return (
    <div className='w-full md:flex'>
        <div className='md:w-2/5 hidden md:flex items-center justify-center'>
            <img className='rounded-3xl scale-125' src={world} alt="" />
        </div>
        <div className='my-4 text-green-200 md:w-3/5'>
            <h1 className='text-3xl text-center font-bold m-4'>
                About
            </h1>
            <div className='p-4'>
            <p className='text-start my-2'>
            Having a deep-seated passion for entrepreneurial opportunities and an enduring fascination with emerging technologies. 
            My interests span across blockchain, web3, virtual reality (VR), augmented reality (AR), 3D art and so many others.
            These cutting-edge fields continuously inspire me to innovate and push the boundaries of what’s possible.
            </p>
            <ul>
                {
                Object.entries(infoList).map(([key, value]) => (
                    <li key={key} className='flex m-2'>
                        <strong className='w-1/4'>{key}: </strong><p className='w-1/2 ml-2 md:ml-0'>{value}</p>
                    </li>
                ))
                }

            </ul>
            </div>
            
        </div>
    </div>
  )
}

export default About