import React, {useState, useEffect} from 'react'
import About from '../component/About'
import Myskills from '../component/Myskills';
import Projects from '../component/Projects';
import Services from '../component/Services';

function NavSections() {
    const [sectioned, setSectioned] = useState(1)
    const [animate, setAnimate] = useState(false); // Use effect to trigger animation on count change
    const [content, setContent] = useState(null)
    useEffect(() => { 
        setAnimate(true); setTimeout(() => {
            setContent(Displaytag.tag); 
            setAnimate(false); }, 1000); // Match the duration of the transition
            },[sectioned])
    const navItems = [
        {
            section:"About",
            num: 1,
            tag: <About />
        },
        {
            section:"Skills",
            num: 2, 
            tag:<Myskills/>
        },
        {
            section:"Projects",
            num: 3,
            tag:<Projects/>
        },
        {
            section:"Services",
            num: 4,
            tag: <Services/>
        },
    ]
    const Displaytag = navItems.find(nav =>nav.num === sectioned)
  return (
    <div className='overflow-hidden'>
        <ul className='flex justify-around'>
                    {
                        navItems.map((navItem) => (
                                <li key={navItem.name}>
                                  
                                    <button
                                        className={`inline-block px-6 py-2 font-semibold text-lg hover:text-gray-900 transition duration-300 group ${navItem.num === sectioned ? "text-black" : "text-gray-500"}`}
                                        onClick={()=>setSectioned(navItem.num)}>
                                        {navItem.section}
                                    </button>
                               
                                </li>
                            
                        ))
                    }
                </ul>

                <div className={`ml-4 pl-24 py-4 md:flex md:justify-end rounded-l-full bg-gradient-to-l from-gray-800 via-gray-800  to-green-800 bg-custom transition-all duration-500 
                    ${animate ? "translate-x-96 opacity-0" : ""}`}>
                    {
                        content
                    }
                </div>
    </div>
  )
}

export default NavSections