import React from 'react'

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
    <div className='my-4 text-green-200'>
        <h1 className='text-3xl text-center font-bold m-4'>
            About
        </h1>
        <div className='p-4'>
        <p className='text-start my-2'>
        I grew up in Asmara, where I developed a deep-seated passion for entrepreneurial opportunities and an enduring fascination with emerging technologies. 
        My interests span across blockchain, web3, virtual reality (VR), augmented reality (AR), and 3D art.
        These cutting-edge fields continuously inspire me to innovate and push the boundaries of what’s possible.
        </p>
        <ul>
            {
            Object.entries(infoList).map(([key, value]) => (
                <li key={key} className='flex m-2'>
                    <strong className='w-1/4'>{key}: </strong><p className='w-1/2'>{value}</p>
                </li>
            ))
            }

        </ul>
        </div>
        
    </div>
  )
}

export default About