import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Menu from "../assets/menu.png"
import Logo from "../assets/netsa_lesan.jpg"
import Contact from './Contact'

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        
    ]
  return (
    <header className='fixed z-10 top-0 w-full py-3 shadow bg-gradient-to-t from-gray-800  to-green-800 border-t-2 border-2 border-black'>
        
            <nav className='flex'>
                <div className='mr-4'>
                  <img className="hidden sm:block rounded-full w-12 h-12 ml-2" src={Logo} alt="Logo" />
                </div>
                <ul className='hidden ml-auto sm:flex space-x-8'>
                    {
                        navItems.map((navItem) => (
                                <li key={navItem.name}>
                                  
                                  <NavLink
                                  className="inline-block px-6 py-2 relative text-gray-600 font-semibold text-lg sm:hover:text-gray-900 transition duration-300 group"
                                  to={navItem.slug}>
                                    {navItem.name}
                                </NavLink>
                               
                                </li>
                            
                        ))
                    }
                </ul>
                <ul className='flex w-full items-center justify-between sm:hidden'>
                    <li>
                      <img className="w-12 h-12 rounded-full" src={Logo} alt="" />
                    </li>
                    <li> 
                      <button onClick={()=>setIsOpen(true)}>
                      <img className="bg-white p-1 ease-in-out duration-300 hover:bg-gray-800 rounded-e-3xl w-8 h-8 mr-3" src={Menu} alt="" />
                      </button>
                      
                    </li>
                </ul>
                {isOpen && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-40">
                <button onClick={()=>setIsOpen(false)} className='text-white text-2xl absolute right-5 top-5'>X</button>
                <div className='flex justify-center items-center text-center'>
                  <Contact />
                </div>

              </div>
      )}
            </nav>
    </header>
  )
}

export default Header

