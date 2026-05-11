import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const location = false;

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>

            <div className='bg-white py-3 shadow-2xl '>

                <div className='max-w-6xl px-4 mx-auto flex justify-between items-center'>


                    {/* LOGO Of SITE */}

                    <div className=' flex items-center gap-3 md:gap-7'>

                        <Link to={'/'}> <h1 className='font-bold text-2xl md:text-3xl'><span className='text-green-400 font-serif'>Nex</span><span>Cart</span></h1> </Link>

                        {/* Logo is End      */}

                        {/* Location is started */}


                        <div className='flex gap-1 cursor-pointer text-gray-700 items-center text-sm md:text-base'> <MapPin className='text-green-400 w-4 h-4 md:w-5 md:h-5' />
                            <span className='font-semibold'>{location ? <div></div> : "Add Address"} </span>
                            <FaCaretDown className='text-green-600' />
                        </div>


            {/* location is end             */}

                    </div>


            {/* MENU SECTION */}


               <nav className='hidden md:block'>
                <ul className='flex gap-5 text-sm font-semibold items-center'>
                  <NavLink to={'/'}  className={({isActive})=>`${isActive ? "border-b-2 transition-all border-green-500" : " text-gray-700"} cursor-pointer`}><li>Home</li></NavLink>
                  <NavLink to={'/products'}  className={({isActive})=>`${isActive ? "border-b-2 transition-all border-green-500" : " text-gray-700"} cursor-pointer`}><li>Products</li></NavLink>
                  <NavLink to={'/about'}  className={({isActive})=>`${isActive ? "border-b-2 transition-all border-green-500" : " text-gray-700"} cursor-pointer`}><li>About</li></NavLink>
                  <NavLink to={'/contact'}  className={({isActive})=>`${isActive ? "border-b-2 transition-all border-green-500" : " text-gray-700"} cursor-pointer`}><li>Contact</li></NavLink>

                </ul>
               </nav>


               {/* MOBILE MENU BUTTON */}

               <div className='md:hidden'>

                    {
                        openMenu ?

                        <HiMiniXMark
                        onClick={() => setOpenMenu(false)}
                        className='text-3xl cursor-pointer'
                        />

                        :

                        <HiMiniBars3
                        onClick={() => setOpenMenu(true)}
                        className='text-3xl cursor-pointer'
                        />
                    }

               </div>


                </div>


                {/* MOBILE MENU */}

                {
                    openMenu &&

                    <div className='md:hidden px-4 pb-4'>

                        <ul className='flex flex-col gap-4 text-sm font-semibold mt-4'>

                            <NavLink
                            to={'/'}
                            onClick={() => setOpenMenu(false)}
                            className={({isActive})=>`${isActive ? "text-green-500" : "text-gray-700"} cursor-pointer`}
                            >
                                <li>Home</li>
                            </NavLink>

                            <NavLink
                            to={'/products'}
                            onClick={() => setOpenMenu(false)}
                            className={({isActive})=>`${isActive ? "text-green-500" : "text-gray-700"} cursor-pointer`}
                            >
                                <li>Products</li>
                            </NavLink>

                            <NavLink
                            to={'/about'}
                            onClick={() => setOpenMenu(false)}
                            className={({isActive})=>`${isActive ? "text-green-500" : "text-gray-700"} cursor-pointer`}
                            >
                                <li>About</li>
                            </NavLink>

                            <NavLink
                            to={'/contact'}
                            onClick={() => setOpenMenu(false)}
                            className={({isActive})=>`${isActive ? "text-green-500" : "text-gray-700"} cursor-pointer`}
                            >
                                <li>Contact</li>
                            </NavLink>

                        </ul>

                    </div>
                }


            </div>


        </>
    )
}

export default Navbar