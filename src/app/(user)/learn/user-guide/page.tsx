
"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiOutlineHome, HiInbox } from "react-icons/hi";
import { VscDebugStart } from "react-icons/vsc";
import { GoQuestion } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";

export default function page() {
    return (
        <main className=" bg-backgroundColor dark:bg-black">

            <div className='w-full ' >
                <h1 className='left-10 text-h28 font-medium text-primaryColor mx-10 py-10'>
                Welcome to the iDATA User Guide!</h1>
                <div className='flex gap-3 items-center'>
                    <FaArrowRight className='text-h22 text-primaryColor' />
                    <p className='text-h22 text-primaryColor py-4'>What is iData?</p>
                </div>
                <p className='text-nearblack font-normal text-h16'> Unlock the full potential of your projects with iDATA. Our comprehensive suite of APIs provides the building blocks you need to create groundbreaking digital experiences. From startups to enterprises, developers trust. Our platform for its simplicity, scalability, and reliability. Join us in shaping the future of technology, one API at a time.</p>
                <div className='flex gap-3 items-center'>
                    <MdKeyboardDoubleArrowRight className='text-h22 text-primaryColor' />
                    <h1 className='left-10 text-h22 font-medium text-primaryColor  py-10'>Collaborate with Swagger for testing API</h1>
                </div>
                <p className='text-nearblack font-normal text-h16'>In our platform, both user we collaborate with swagger for testing api .</p>
                <Image width={1000} height={100} src={"/seamey/swagger.png"} alt="Swagger image"/>
                <div className='flex gap-3 items-center'>
                    <MdKeyboardDoubleArrowRight className='text-h22 text-primaryColor' />
                    <h1 className='left-10 text-h22 font-medium text-primaryColor py-10'>Challenges in API Generation</h1>
                </div>
                <p className='text-nearblack font-normal text-h16'>API Generator in our platform must user have a little knowledge about sql language and database. Because need user fill some info into form for generate api.</p>
            </div>
            <section className="bg-white h-full w-42">
                
            </section>
        </main>
    );
}
