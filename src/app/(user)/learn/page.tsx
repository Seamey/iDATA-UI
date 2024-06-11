"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <main className='w-full mx-auto mt-[70px] bg-backgroundColor dark:bg-black'>
            <h1 className='text-h34 md:text-h40 text-primaryColor text-center pt-10'>IDATA&apos;s Documentation</h1>
            <p className='text-gray-400 text-center font-normal text-h20'>Be up and running in minutes, and transform weeks of work into just hours</p>

            <div className='grid md:grid-cols-2 justify-center items-center gap-10 w-8/12 mx-auto'>
                <Link href={"../learn/developer-guide"} className='bg-white shadow-xl rounded-xl px-5 py-5 my-10 '>
                    <div className='flex justify-between px-4 py-5 '>
                        <h1 className=' text-primaryColor font-medium text-h22'>Developer Documentation</h1>
                        <FaArrowRight />
                    </div>
                    <p className='text-gray-400 text-h16 font-normal px-4'>All you need  to get your project up-and-running,
                        and become a iDATA expert</p>
                    <Image width={1000} height={100} src={"/seamey/developer.png"} alt='Developer Guide' className='w-11/12 mx-auto' />
                </Link>
                <Link href={"./learn/user-guide"} className='bg-white shadow-xl rounded-xl px-5 py-5 my-10 '>
                    <div className='flex justify-between px-5 py-5'>
                        <h1 className=' text-primaryColor font-medium text-h22 ' >User Guide</h1>
                        <FaArrowRight />
                    </div>
                    <p className='text-gray-400 text-h16 font-normal px-5'>Get the most out of the admin panel with our user 
guide</p>
                    <Image width={1000} height={100} src={"/seamey/user.png"} alt='User Guide' className='w-11/12 mx-auto' />
                </Link>
            </div>
        </main>
    )
}

export default page
