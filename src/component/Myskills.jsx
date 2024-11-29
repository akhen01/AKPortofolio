import React from 'react'

function Myskills() {
    const skills = {
        React : 75,
        Django: 80,
        Python: 80,
        JavaScript: 75,
        Appwrite: 75,
        TailwindCSS: 80,
        SEO: 77,
        Creativity: 100
    }
  return (
    <div className='my-4 text-green-200 '>
        <h1 className='text-3xl text-center font-bold m-4'>
            My Skills
        </h1>
        <ul className='flex w-full flex-wrap'>
        {
            Object.entries(skills).map(([key, value]) => (
                <li key={key} className='m-3 sm:m-5 w-2/5'>
                    <div className='flex justify-between'>
                    <strong className='w-1/4'>{key} </strong><p>{value}%</p>
                    </div>
                    <p className='w-full'>
                    <div className='bg-gray-900 w-full h-2 rounded-full'>

                    <div className='bg-green-200 rounded-full h-2' style={{width:`${value}%`}}></div>
                    </div>
                    </p>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default Myskills