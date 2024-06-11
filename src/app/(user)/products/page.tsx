import React from 'react'
import Image from 'next/image'
import { CiBank } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";

const page = () => {
  return (
    <main className='w-full mx-auto bg-backgroundColor dark:bg-black'>
      <h1 className='text-h34 md:text-h42 text-primaryColor text-center pt-10'>Our Products</h1>
      <div className="w-11/12 mx-auto md:pl-10 ">
        {/* section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between w-full mx-auto pt-8">
          <div className=" justify-between col-span-1">
            <div>
              <h1 className="my-6 font-semibold text-h18 text-primaryColor md:text-h20">API Mocking?</h1>
              <div className='inline'>
                <p className="font-normal text-secondaryColor inline text-h14 md:text-h18 2xl:w-2/5">Smart mocking </p>
                <p className="font-normal inline text-gray-500 text-h14 md:text-h18 2xl:w-2/5">automatically generates data based on field names, advanced mocking returns specified data based on requests, and mock scripts modify returned mock data.</p>

              </div>
            </div>
            <div className='shadow-lg rounded-xl bg-white w-11/12  py-8 mt-5 justify-center'>
              <div className='grid grid-cols-2 justify-center items-center px-3.5'>
                <div className='text-Left'>
                  <p className='font-normal text-primaryColor inline'>Get</p>
                  <p className='font-normal text-primaryColor inline'>/products</p>
                </div>
                <div className='text-Left'>
                  <p className='font-normal text-primaryColor inline'>Get</p>
                  <p className='font-normal text-primaryColor inline'>/users</p>
                </div>
                <div className='text-Left'>
                  <p className='font-normal text-primaryColor inline'>Get</p>
                  <p className='font-normal text-primaryColor inline'>/categories</p>
                </div>
                <div className='text-Left'>
                  <p className='font-normal text-primaryColor inline'>Get</p>
                  <p className='font-normal text-primaryColor inline'>/comments</p>
                </div>
                <div className='text-Left'>
                  <p className='font-normal text-primaryColor inline'>Get</p>
                  <p className='font-normal text-primaryColor inline'>/carts</p>
                </div>
                <div className='text-Left'>
                  <p className='font-normal text-primaryColor inline'>Get</p>
                  <p className='font-normal text-primaryColor inline'>/todos</p>
                </div>

              </div>
              <div className='flex items-center gap-4 px-3 py-2.5'>
                <p className='text-secondaryColor font-normal'>Ready to mock your APIs?</p>
                <button className='text-primaryColor border border-primaryColor rounded-full px-3 py-2 '>Get Started</button>
              </div>
            </div>

          </div>
          <div className=" items-center col-span-1 ml-10">
            <Image width={400}
              height={100}
              src={'/seamey/Data image.png'}
              alt=" image" />
          </div>
        </section>
        {/* section 2 */}
        <h1 className="my-6 mt-14 font-semibold text-h18 text-primaryColor md:text-h20">JSON Template</h1>
        <section className="flex flex-wrap-reverse md:flex-nowrap md:flex-cols-2 w-full justify-between mx-auto gap-5 items-center pt-8">
          <div className=" items-center">

            <Image width={350}
              height={100}
              src={'/seamey/M-banking.png'}
              alt="M-banking image" />
          </div>
          <div className="md:w-1/2 justify-center">
            <h1 className="my-6 font-semibold text-h16 text-primaryColor md:text-h18">M-Banking</h1>
            <p className="font-normal text-gray-500 text-h14 md:text-h16 2xl:w-2/5">The M-Banking API Template offers endpoints for mobile banking services, including account management, transactions, balance inquiries, fund transfers. It ensures robust security with encryption and multi-factor authentication, supports real-time notifications, and integrates with third-party services. </p>

          </div>
        </section>
        {/* section 3 */}
        <section className="flex flex-wrap-reverse md:flex-nowrap md:flex-cols-2 w-full justify-between mx-auto gap-5 items-center pt-8">
          <div className="md:w-1/2 justify-center">
            <h1 className="my-6 font-semibold text-h16 text-primaryColor md:text-h18">E-Commerce</h1>
            <p className="font-normal text-gray-500 text-h14 md:text-h16 2xl:w-2/5">The E-Learning API Template facilitates online education platforms with features for course management, user authentication, progress tracking, assessments, and communication tools. It supports multimedia content and integrates with various educational tools for an engaging learning experience.</p>

          </div>
          <div className="items-center">

            <Image width={350}
              height={100}
              src={'/seamey/E-commerce.png'}
              alt="E-commerce image" />
          </div>

        </section>
        {/* section 4 */}
        <section className="flex flex-wrap-reverse md:flex-nowrap md:flex-cols-2 w-full justify-between mx-auto gap-5 items-center pt-8">
          <div className=" items-center">

            <Image width={350}
              height={100}
              src={'/seamey/E-learning.png'}
              alt="E-learning image" />
          </div>
          <div className="md:w-1/2 justify-center">
            <h1 className="my-6 font-semibold text-h16 text-primaryColor md:text-h18">E-Learning</h1>
            <p className="font-normal text-gray-500 text-h14 md:text-h16 2xl:w-2/5">The E-Commerce API Template provides endpoints for managing product catalogs, orders, payments, and customer accounts. It includes features for product search, shopping cart, order tracking, inventory management, along with support for promotions and customer reviews.</p>

          </div>

        </section>
      </div >
      {/* card section */}
      <section className='w-11/12 mx-auto justify-center grid grid-cols-1 md:grid-cols-3 pt-10 gap-4'>
        <div className='shadow-md  rounded-lg pt-10 px-4 py-3'>
          <div className='flex gap-3 pb-3.5'>
            <CiBank className='text-secondaryColor' />
            <p className='text-primaryColor'>M-Banking API</p>
          </div>
          <p className='text-gray-400 text-h14 pb-4'>Provides mobile banking services: account management, transactions, balance checks, fund transfers, and secure authentication.</p>
          <button className='border border-primaryColor hover:bg-primaryColor hover:text-white rounded-full py-2.5 px-4'>Download</button>
        </div>
        <div className='shadow-md rounded-lg pt-10 px-4 py-3'>
          <div className='flex gap-3 pb-4'>
            <HiOutlineShoppingBag className='text-secondaryColor' />
            <p className='text-primaryColor'>E-Commerce API</p>
          </div>
          <p className='text-gray-400 text-h14 pb-4'>Enables online retail: product management, order, payments, customer accounts, and secure transactions with promotions and reviews support.</p>
          <button className='border border-primaryColor hover:bg-primaryColor hover:text-white rounded-full py-2.5 px-4'>Download</button>
        </div>
        <div className='shadow-md rounded-lg pt-10 px-4 py-3'>
          <div className='flex gap-3 pb-4'>
            <IoSchoolOutline className='text-secondaryColor' />
            <p className='text-primaryColor'>E-Learning API</p>
          </div>
          <p className='text-gray-400 text-h14 pb-4'>Supports online education: course management, user authentication, progress tracking, assessments, and multimedia content delivery.</p>
          <button className='border border-primaryColor hover:bg-primaryColor hover:text-white rounded-full py-2.5 px-4'>Download</button>
        </div>
      </section>
      <h1 className='mx-10 pt-10 text-h28 md:text-h34 text-primaryColor'>Collaborate with Swagger for testing API</h1>
      <div className='mx-10 inline'>
        <p className="font-normal text-secondaryColor inline text-h14 md:text-h18 2xl:w-2/5">Backend not ready? </p>
        <p className=" font-normal text-center inline text-gray-500 text-h14 md:text-h18 2xl:w-2/5">Still waiting for database access? Generate a custom dataset that you can read and write to via a REST API.</p>

      </div>
      <Image width={1000} height={100} src={"/seamey/swagger.png"} alt='swagger image' className='w-11/12 mx-auto my-5' />
    </main >
  )
}

export default page
