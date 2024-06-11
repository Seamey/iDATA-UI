import React from 'react'
import Image from 'next/image'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiMapPin } from "react-icons/hi2";


const page = () => {
    return (
        <main className='bg-backgroundColor dark:bg-black w-full mx-auto'>

            <h1 className='text-h28 md:text-h34 text-primaryColor text-center pt-10'>Contact Us</h1>
            <p className='text-gray-400 text-h16 font-medium text-center pt-4'>Any question or remarks? Just write us a message!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto'>
                <Image width={1000} height={100} src={"/seamey/contact-us.png"} alt='Contact us image'
                    className='w-10/12 mx-auto' />
                <div>
                    <div className='grid grid-cols-2 gap-3 w-9/12 mx-auto justify-center'>
                        <div>
                            <p className='text-gray-500 text-h16 font-normal py-3'>First Name</p>
                            <div className='rounded-full border border-slate-150 font-normal text-gray-400 px-2 py-1.5'>helen</div>
                        </div>
                        <div>
                            <p className='text-gray-500 text-h16 font-normal py-3'>Last Name</p>
                            <p className='rounded-full border border-slate-150 font-normal text-gray-400 px-2 py-1.5'>leang</p>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-gray-500 text-h16 font-normal py-3'>Email</p>
                            <div className='rounded-full border border-slate-150 font-normal text-gray-400 px-2 py-1.5'>leang</div>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-gray-500 text-h16 font-normal py-3'>Phone Number</p>
                            <div className='rounded-full border border-slate-150 font-normal text-gray-400 px-2 py-1.5'>+855 123456789</div>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-gray-500 text-h16 font-normal py-3'>Message</p>
                            <div className='rounded-lg border border-slate-150 font-normal text-gray-400 px-2 py-14 '>Write your message...</div>
                        </div>
                        <button className='col-span-2 rounded-full border border-slate-150 font-normal text-center text-white bg-primaryColor px-2 py-1.5 my-4'>Send Message</button>

                    </div>

                </div>
            </div>
            <h1 className='font-semibold text-primaryColor text-h26 text-center pt-8'>Contact Information</h1>
            <p className='text-gray-400 text-h16 text-center font-normal pb-10'>Say something to start a live chat!</p>
            <div className='w-9/12 mx-auto shadow-md border border-gray-400 rounded-xl px-10 py-10'>
                <div className='flex gap-3 py-2'>
                    <FaPhoneVolume />
                    <p className='text-primaryColor text-h16'>+855 12345328</p>
                </div>
                <div className='flex gap-3 py-2'>
                    <MdEmail />
                    <p className='text-primaryColor text-h16'>idata.cstad.co@gmail.com</p>
                </div>
                <div className='flex gap-3 py-2'>
                    <HiMapPin/>
                    <p className='text-primaryColor text-h16'>St 562, Phnom Penh 120407, Phnom Penh, Cambodia</p>
                </div>
            </div>
        </main>
    )
}

export default page
