import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/netsa_lesan.jpg"


function Footer() {
  return (
    <section className="flex bg-gradient-to-t to-gray-800  from-green-800 border-t-2 border-2 border-black w-full rounded-t-xl z-50 p-4">
        <div className="z-10 mx-auto max-w-7xl">
            <div className="m-2 flex flex-wrap">
                <div className="w-full lg:w-8/12">
                    <div className="flex h-full flex-row justify-center sm:items-center">
                        <div className=" mr-10 inline-flex ">
                        <img className="w-16 h-16 ml-2 bg-white rounded-full" src={Logo} alt="Logo" />
                        </div>
                        <div>
                            <p className=" text-sm text-white">
                                &copy; Copyright 2024. All Rights Reserved by Netsa Lesan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-4/12">
                    <div className="text-center ">
                        <h3 className="text-center tracking-px text-xs font-semibold uppercase text-white w-full">
                            Support
                        </h3>
                        <ul className='w-full flex justify-around  items-start text-left'>
                            <li className="w-full">
                                <Link
                                    className=" text-base font-medium text-white hover:text-gray-300 w-full sm:text-center"
                                    to="https://www.instagram.com/neln_studio"
                                >
                                    Contact using Instagram: @neln_studio
                                </Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer