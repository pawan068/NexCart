import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import Cart from './../pages/Cart';
import { IoCartOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { getCart } from "../Context/CartContext";
import { Moon, Sun } from "lucide-react";
import { getTheme } from "../Context/ThemeContext";


import {
    SignedIn,
    SignedOut,
    SignUpButton,
    UserButton
} from "@clerk/clerk-react";

const Navbar = ({ location }) => {

    const { totalItems } = getCart()



    const [opendrop, setdrop] = useState(false)
    const toggledrop = () => {
        setdrop(!opendrop)
    }




    const [locationDetected, setLocationDetected] = useState(false)
    const detectLocation = () => {
        setLocationDetected(true)
        toggledrop()
    }



    const [openMenu, setOpenMenu] = useState(false);
    const { darkMode, setDarkMode } = getTheme();

    return (
        <>

            <div className='bg-white  h-16 shadow-md  sticky top-0 z-50'>

                <div className='max-w-5xl md:max-w-7xl h-full flex   dark:bg-black dark:text-white dark:border-white  mx-auto px-2 md:px-5 grid grid-cols-2 md:grid-cols-3 items-center'>


                    {/* LOGO Of SITE */}

                    <div className='flex  max-w-fit items-center gap-1 md:gap-6'>

                        <Link to={'/'}>

                            <h1 className='font-bold text-sm md:text-3xl leading-none'>
                                <span className='text-green-400 font-serif'>Nex</span>
                                <span>Cart</span>
                            </h1>

                        </Link>

                        {/* Logo is End      */}

                        {/* Location is started */}


                        <div className=' flex items-center relative gap-1 dark:text-white text-gray-700 text-[9px] md:text-md cursor-pointer'>

                            <MapPin className='text-green-400 w-4 h-4' />

                            <span>
                                {locationDetected && location ? <div className='-space-y-1'>
                                    <p>{location.suburb}</p>
                                    <p>{location.city}</p>
                                </div> : "Add Address"}
                            </span>

                            <FaCaretDown onClick={toggledrop} className='text-green-600 text-lg md-[1px]' />


                            {
                                opendrop ? <div className='rounded-xl absolute z-50 top-12 w-[180px] border border-gray-100   bg-white shadow-lg'>
                                    <div className='px-4 py-3 flex items-center justify-between'>
                                        <h1 className='font-semibold  dark:text-gray-100 text-gray-800'>Location</h1>
                                        <span onClick={toggledrop} className='text-gray-400 hover:text-red-400 cursor-pointer text-xl transition-all'><CgClose /></span>
                                    </div>
                                    <div className='px-4 pb-4'>
                                        <button onClick={detectLocation} className='w-full dark:bg-green-700 bg-green-500 py-2 rounded-lg text-white font-semibold hover:bg-green-600 transition-all cursor-pointer'>
                                            Detect Location
                                        </button>
                                    </div>
                                </div> : null
                            }

                        </div>






                        {/* location is end             */}

                    </div>



                    {/* MENU SECTION */}


                    <nav className='hidden  dark:text-white  max-w-fit md:flex justify-center'>

                        <ul className='flex items-center gap-8 text-[15px] font-semibold'>

                            <NavLink
                                to={'/'}
                                className={({ isActive }) =>
                                    `${isActive ? "text-black dark:text-green-100 border-b-2 border-green-500 " : "text-gray-700 dark:text-white"} pb-1 transition-all duration-300`
                                }
                            >
                                <li className='hover:text-green-500'>
                                    Home
                                </li>
                            </NavLink>

                            <NavLink
                                to={'/products'}
                                className={({ isActive }) =>
                                    `${isActive ? "text-black dark:text-green-100 border-b-2 border-green-500" : "text-gray-700 dark:text-white"} pb-1 transition-all duration-300`
                                }
                            >
                                <li className='hover:text-green-500'>
                                    Products
                                </li>
                            </NavLink>

                            <NavLink
                                to={'/about'}
                                className={({ isActive }) =>
                                    `${isActive ? "text-black dark:text-green-100 border-b-2 border-green-500" : "text-gray-700 dark:text-white"} pb-1 transition-all duration-300`
                                }
                            >
                                <li className='hover:text-green-500'>
                                    About
                                </li>
                            </NavLink>

                            <NavLink
                                to={'/contact'}
                                className={({ isActive }) =>
                                    `${isActive ? "text-black dark:text-green-100 border-b-2 border-green-500" : "text-gray-700 dark:text-white"} pb-1 transition-all duration-300`
                                }
                            >
                                <li className='hover:text-green-500'>
                                    Contact
                                </li>
                            </NavLink>

                        </ul>

                    </nav>



              


                    {/* SIGN IN BUTTON */}


                    <header className='flex items-center   justify-end gap-2 md:gap-5'>



                             {/* 
                    Modes */}

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-0 rounded-full max-w-fit cursor-pointer  transition"
                    >
                        {darkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>



                        {/*  cart section */}

                        <Link
                            to={'/Cart'}
                            className='relative flex items-center justify-center group'
                        >

                            <div className='p-1.5 rounded-full hover:bg-green-50 dark:border-none transition-all duration-300'>

                                <IoCartOutline className='h-7 w-7 dark:text-white text-black dark:border-none group-hover:text-green-600 transition-all duration-300' />

                            </div>

                            <span className='bg-green-500 text-white h-5 w-5 flex items-center justify-center rounded-full absolute font-bold -top-1 -right-1 text-xs border-2 dark:border-black border-white'>
                                {totalItems}
                            </span>

                        </Link>



                        <SignedOut>
                            <SignUpButton>
                                <button className='bg-green-500 cursor-pointer min-w-fit whitespace-nowrap px-3 md:px-5 py-2 rounded-lg font-semibold text-xs sm:text-sm text-white hover:bg-green-600 transition-all duration-300'>
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>

                        <SignedIn>
                            <div className='flex items-center justify-center'>
                                <UserButton />
                            </div>
                        </SignedIn>

                  



                        {/* MOBILE MENU BUTTON */}

                        <div className='md:hidden z-50'>

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

                    </header>


                </div>



                {/* MOBILE MENU */}

                <div className={`md:hidden fixed top-16 left-0 h-screen w-[260px] dark:bg-black dark:text-white bg-white shadow-xl  z-40 transform transition-transform duration-300 ease-in-out ${openMenu ? "translate-x-0" : "-translate-x-full"}`}>

                    <ul className='flex flex-col gap-6 text-sm font-semibold mt-8 px-5'>

                        <NavLink
                            to={'/'}
                            onClick={() => setOpenMenu(false)}
                            className={({ isActive }) =>
                                `${isActive ? "text-green-500" : "text-gray-700 dark:text-white"}`
                            }
                        >
                            <li>Home</li>
                        </NavLink>

                        <NavLink
                            to={'/products'}
                            onClick={() => setOpenMenu(false)}
                            className={({ isActive }) =>
                                `${isActive ? "text-green-500" : "text-gray-700 dark:text-white"}`
                            }
                        >
                            <li>Products</li>
                        </NavLink>

                        <NavLink
                            to={'/about'}
                            onClick={() => setOpenMenu(false)}
                            className={({ isActive }) =>
                                `${isActive ? "text-green-500" : "text-gray-700 dark:text-white"}`
                            }
                        >
                            <li>About</li>
                        </NavLink>

                        <NavLink
                            to={'/contact'}
                            onClick={() => setOpenMenu(false)}
                            className={({ isActive }) =>
                                `${isActive ? "text-green-500" : "text-gray-700 dark:text-white"}`}>
                            <li>Contact</li>
                        </NavLink>

                    </ul>

                </div>


            </div>


        </>
    )
}

export default Navbar
