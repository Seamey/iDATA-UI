'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiPostman } from "react-icons/si";
import { SlMagicWand } from "react-icons/sl";
import { FiFileText } from "react-icons/fi";
import ThemeSwitch from '../ThemeSwitch';
import { useRouter } from 'next/navigation';
import { IoIosArrowDown } from "react-icons/io";

export default function NavbarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const route = useRouter();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className='bg-white dark:bg-gray-800 fixed w-full top-0 left-0 z-50'>
            <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
                <div className='relative flex items-center justify-between h-20'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        <button onClick={toggleNavbar} className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                            <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                {isOpen ? (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                ) : (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                                )}
                            </svg>
                        </button>
                        <div className='flex-shrink-0 '>
                            <Image onClick={() => route.push("/")}
                                width={1000}
                                height={1000}
                                src={"/seamey/IDATA_LOGO.png"}
                                alt="Logo IDATA"
                                className='h-12 w-auto block lg:hidden  cursor-pointer'
                            />
                        </div>
                    </div>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 '>
                            <Image onClick={() => route.push("/")}
                                width={1000}
                                height={1000}
                                src={"/seamey/IDATA_LOGO.png"}
                                alt="Logo IDATA"
                                className='hidden lg:block h-12 w-auto cursor-pointer'
                            />
                        </div>
                        <div className='hidden sm:block sm:ml-6 flex-grow items-center'>
                            <div className='flex justify-center space-x-4'>
                                <div className='relative text-center'>
                                    <button onClick={toggleDropdown} className='text-gray-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:text-secondaryColor flex items-center'>
                                        Products
                                        <IoIosArrowDown />
                                    </button>
                                    {isDropdownOpen && (
                                        <div className='absolute z-10 mt-2 w-56 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1'>
                                            <Link href="/products" className=' px-4 py-2 text-sm text-primaryColor dark:text-white hover:text-secondaryColor dark:hover:bg-gray-600 flex items-center'>
                                                <SlMagicWand />
                                                <span className='ml-2'>API Mockup</span>
                                            </Link>
                                            <Link href="/products" className='px-4 py-2 text-sm text-primaryColor dark:text-white hover:text-secondaryColor dark:hover:bg-gray-600 flex items-center'>
                                                <SiPostman />
                                                <span className='ml-2'>Template Postman</span>
                                            </Link>
                                            <Link href="/products" className=' px-4 py-2 text-sm text-primaryColor dark:text-white hover:text-secondaryColor dark:hover:bg-gray-600 flex items-center'>
                                                <FiFileText />
                                                <span className='ml-2'>Environment Testing</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link href="/learn" className='text-primaryColor dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:text-secondaryColor'>Learn</Link>
                                <Link href="/about-us" className='text-primaryColor dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:text-secondaryColor'>About Us</Link>
                                <Link href="/dashboard" className='text-primaryColor dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:text-secondaryColor'>Dashboard</Link>
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <ThemeSwitch />
                        <button onClick={() => route.push(`/login`)} className='mx-3 font-normal text-primaryColor rounded-full border md:px-5 md:py-1.5 px-3 py-1.5 md:text-h18 text-h12 border-primaryColor hover:bg-primaryColor hover:text-white dark:text-secondaryColor dark:border-secondaryColor dark:hover:text-white dark:hover:bg-secondaryColor'>Login</button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                    <div className='relative'>
                        <button onClick={toggleDropdown} className='block text-gray-700 dark:text-white px-3 py-2 rounded-md text-base font-medium hover:text-secondaryColor'>
                            Products
                        </button>
                        {isDropdownOpen && (
                            <div className='text-center absolute z-10 mt-2 w-auto bg-white dark:bg-gray-700 rounded-md shadow-lg py-1'>
                                <Link href="/products" className='block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center'>
                                    <SlMagicWand />
                                    <span className='ml-2'>API Mockup</span>
                                </Link>
                                <Link href="/products" className='block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center'>
                                    <SiPostman />
                                    <span className='ml-2'>Template Postman</span>
                                </Link>
                                <Link href="/products" className='block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center'>
                                    <FiFileText />
                                    <span className='ml-2'>Environment Testing</span>
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/learn" className='block text-gray-700 dark:text-white px-3 py-2 rounded-md text-base font-medium hover:text-secondaryColor'>Learn</Link>
                    <Link href="/about-us" className='block text-gray-700 dark:text-white px-3 py-2 rounded-md text-base font-medium hover:text-secondaryColor'>About Us</Link>
                    <Link href="/dashboard" className='block text-gray-700 dark:text-white px-3 py-2 rounded-md text-base font-medium hover:text-secondaryColor'>Dashboard</Link>
                </div>
            </div>
        </nav>
    );
}
