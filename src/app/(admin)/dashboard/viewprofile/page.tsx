"use client"

import React from 'react'
import { CiUser } from "react-icons/ci";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsCamera } from "react-icons/bs";

const Page = () => {
  const route = useRouter()
  return (
    <main className='bg-backgroundColor dark:bg-black'><div className="flex gap-3 items-center mb-6">
        <CiUser className='text-h20'/>
        <p className="text-h20 font-semibold">My Profile</p>
      </div>
      <div>
        <div className='grid grid-col-1 md:grid-cols-3 gap-12 '>
          <div className='col-span-1 w-full mx-auto rounded-lg bg-blue-400 '>
            <Image width={250} height={250} src={"/seamey/Sokcheat.jpg"} alt="User profile" className='rounded-full text-center pt-4 p-5 justify-center items-center' />
            <div className='rounded-full w-16 p-2 bg-primaryColor'><BsCamera className='text-white'/></div>
          </div>
          <div className='bg-red-300 col-span-2 w-11/12 rounded-xl p-5'>
            <div className='flex items-center'>
              <CiUser />
              <p className='text-primaryColor text-h22 py-2 text-center'>User Information</p>
              <hr className='text-secondaryColor ' />
            </div>
            <div className='grid grid-cols-2 justify-between items-center'>
              <div className='col-span-1'>
                <p className='text-gray-400 text-h18 font-normal py-1.5 '>First Name</p>
                <p className='text-primaryColor text-h20 font-normal px-2 py-1.5 '>Sok</p>
              </div>
              <div className='col-span-1'>
                <p className='text-gray-400 text-h18 font-normal py-1.5'>Last Name</p>
                <p className='text-primaryColor text-h20 font-normal px-2 py-1.5 '>Cheat</p>
              </div>
              <div className='col-span-2'>
                <p className='text-gray-400 text-h18 font-normal py-1.5 '>Email</p>
                <p className='text-primaryColor text-h20 font-normal px-2 py-1.5 '>SokCheat@gmail.com.xyz</p>
              </div>
              <div className='col-span-2 pt-4 w-full'>
                <button onClick={() => route.push(`/dashboard/editprofile`)} className='text-white bg-primaryColor border border-primaryColor rounded-full text-h18 font-normal py-1.5 w-full text-center'>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
    </main>
  )
}

export default Page
