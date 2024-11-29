import React from 'react'
import design from "../assets/web-design.png"
import develop from "../assets/coding.png"
import deploy from "../assets/deployment.png"
function Services() {
  return (
    <div className='w-full flex flex-col md:flex-row'>
      <ul className='w-full md:w-1/3 text-center text-green-300 font-bold items-center flex md:flex-col justify-around md:justify-center text-xl pl-20 pt-4 md:pl-0 md:pt-0'>
        <li className='h-20 md:h-32 items-center justify-center flex flex-col'><img className='h-10 md:h-20 invert' src={design} alt="" /> Design</li>
        <li className='h-20 md:h-32 items-center justify-center flex flex-col'><img className='h-10 md:h-20 invert' src={develop} alt="" /> Develop</li>
        <li className='h-20 md:h-32 items-center justify-center flex flex-col'><img className='h-10 md:h-20 invert' src={deploy} alt="" /> Deploy</li>
      </ul>
    <div className='mr-2 pb-4 md:w-2/3'>
        <h1 className='text-green-300 text-3xl text-center font-bold mb-4 '>
            Services
        </h1>
        <p className='text-white m-2 '>
            I specialize in crafting visually stunning and highly functional frontend websites tailored to meet any clients' needs.            
            Bringing creative solutions to life, ensuring that each website we build is not only aesthetically pleasing but also optimized for performance and accessibility.
            </p>
            <div className='bg-gray-900 p-8 rounded-2xl shadow'>
              <p className='text-green-300 font-bold '>
              I am especially proud of my deep-rooted expertise and experience catering to #Habesha East-African small businesses. This unique focus allows me to blend tradition with innovation, creating a distinct and flavorful touch that resonates with the rich cultural heritage of the region. 
              </p>
            </div>
            <p className='text-green-300 font-bold my-8 ml-8 pb-4'>
            Beyond just development, handling the entire process of getting your website online, from initial design concepts to final deployment. 
            Looking forward to Being your partners to elevate your online presence with a website that stands out and delivers exceptional user experiences.
        </p>
    </div>
    </div>
  )
}

export default Services