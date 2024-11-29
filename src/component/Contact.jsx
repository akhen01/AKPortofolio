import React from 'react'
import Insta from "../assets/icons8-instagram-96.png"
import Whatsapp from "../assets/icons8-whatsapp-96.png"
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='flex flex-row gap-14 text-2xl font-bold w-full items-center' >
        <Link to={"https://www.instagram.com/neln_studio"} className='flex flex-col h-32 w-32 text-bold text-green-800'><img className='animate-bounce' src={Insta} />558alex1</Link>
    </div>
  )
}

export default Contact