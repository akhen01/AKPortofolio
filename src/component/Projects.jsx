import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
    const TopProjects = [
        {
            Name: "Nailcare Salon",
            Catagory: "Front end",
            Frameworks:"Reactjs and Tailwind",
            link: "https://www.instagram.com/reel/DC2mRZjyLo6/?igsh=MWtteDRiMmJldmlrbA=="
        },
        {
            Name: "Restaurant",
            Catagory: "Front end",
            Frameworks:"Reactjs and Tailwind",
            link: "https://github.com/akhen01/ResHabesha"
        },
        {
            Name: "Barber",
            Catagory: "Front end",
            Frameworks:"Reactjs and Tailwind",
            link: "https://www.instagram.com/reel/DCRzcBmvj9M/?igsh=MWpjZHFrdHY5Zm1yaA=="
        },
        {
            Name: "Travel Agency",
            Catagory: "Front end",
            Frameworks:"Reactjs and Tailwind",
            link: "https://www.instagram.com/reel/DCnlf_OpxhE/?igsh=c2ZobWE4OGIydHVu"
        },
        {
            Name: "Home Renting",
            Catagory: "Full Stack",
            Frameworks:"Reactjs, Appwrite and Tailwind",
            link: "https://github.com/akhen01/GuestHouseRent"
        },
        {
            Name: "Personal Finance App",
            Catagory: "Full Stack",
            Frameworks:"Django",
            instalink: "https://github.com/akhen01/finance-app"
        },
        {
            Name: "Magazine Website",
            Catagory: "Full Stack",
            Frameworks:"Django rest and Reactjs",
            instalink: "https://github.com/akhen01/full-stack-tut"
        },
    ]
  return (
    <div className='no-scrollbar flex overflow-x-auto h-80 md:h-auto md:overflow-hidden flex-wrap flex-col justify-around items-start p-3 gap-2 rounded-l-full bg-gray-900 md:flex-row -ml-20 pl-16 md:pt-8'>
        {
        TopProjects.map((pro) => (
            <div className='group w-auto md:w-1/3 h-46 p-6 flex flex-col justify-start rounded-3xl text-green-800 bg-gray-800 hover:bg-green-300 ' key={pro.Name}>
                <Link to={pro.link} className='w-full flex flex-col'>
                    <h1 className='text-green-300 text-2xl text-center group-hover:text-gray-700 w-full'>{pro.Name}</h1>
                
                <p className='w-full'>
                    <strong>FrameWorks:</strong> {pro.Frameworks}
                </p>
                <p className='w-full'>
                    <strong>Catagory:</strong> {pro.Catagory}
                </p>
                </Link>
            </div>
        ))
        }
    </div>
  )
}

export default Projects