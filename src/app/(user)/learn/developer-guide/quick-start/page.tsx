"use client";

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoCopyOutline } from "react-icons/io5";
import DropdownComponent from '@/components/(user)/doc/DropDownComponent';
import React, { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { Sidebar } from "flowbite-react";

const sections = [
  {
    id: 'quick-start',
    title: 'Quick Start Guide',
    subtitle: 'Follow the steps below by clicking on the togglable content to read more instructions.',
    content: 'Some content for quick start guide',
    sidebarLabel: 'Quick Start'
  },
  {
    id: 'usage',
    title: 'How to use iDATA?',
    subtitle: '',
    content: 'Welcome to the iDATA API guide...',
    sidebarLabel: 'Usage'
  },
  {
    id: 'step1',
    title: 'Step 1: Create new project with iDATA',
    subtitle: '',
    content: 'We will first create a new iDATA project...',
    sidebarLabel: 'Step 1'
  },
  {
    id: 'step2',
    title: 'Step 2: Start generating API with iDATA',
    subtitle: '',
    content: 'You can start to generate API with iDATA by...',
    sidebarLabel: 'Step 2'
  }
];

const Page: React.FC = () => {
  const handleScrollToStart = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <main className='dark:bg-black pt-3 bg-backgroundColor w-full'>
      <div className='w-8/12 mx-3 mt-[70px]'>
        <h1 id='quick-start' className='left-10 text-h28 font-medium text-primaryColor mx-10 py-10'>
          Quick Start Guide
        </h1>
        <p className='text-h16 text-nearblack py-4 font-normal'>
          Follow the steps below by clicking on the togglable content to read more instructions.
        </p>
        <DropdownComponent
          title="Run the installation script"
          content={
            <div className="p-4 bg-white border-t border-gray-300">
              <p className="mb-2 font-normal">Run the installation script</p>
              <p>Run the following command in a terminal:</p>
              <div className="bg-gray-100 p-2 mt-2 font-normal border-secondaryColor rounded-md flex justify-between items-center">
                <code className="text-primaryColor">npx create-iData-app@latest my-project</code>
                <button
                  onClick={() => navigator.clipboard.writeText('npx create-iData-app@latest my-project')}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <IoCopyOutline />
                </button>
              </div>
            </div>
          }
        />

        <div className='flex gap-3 items-center'>
          <FaArrowRight className='text-h22 text-primaryColor' />
          <p id='usage' className='text-h22 text-primaryColor py-4'>How to use iDATA?</p>
        </div>
        <p className='text-nearblack font-normal text-h16'>
          Welcome to the iDATA API guide. This document will help you get started with using the iDATA API, including setting up your environment, making API requests, and handling responses.
        </p>
        
        {/* Step 1 */}
        <div className='flex gap-3 items-center'>
          <MdKeyboardDoubleArrowRight className='text-h22 text-primaryColor' />
          <h1 id='step1' className='left-10 text-h22 font-medium text-primaryColor py-10'>
            Step 1: Create new project with iDATA
          </h1>
        </div>
        <p className='text-nearblack font-normal text-h16'>
          We will first create a new iDATA project on your machine by running a command in the terminal, and then register our first local administrator user.
        </p>
        
        <DropdownComponent
          title="Credentials for obtaining these from your iDATA account dashboard."
          content={
            <div>
              <p className='font-normal text-primaryColor py-2'>To access the admin panel:</p>
              <p className='font-normal text-primaryColor'>1. Go to page login</p>
              <p className='font-normal text-primaryColor'>2. Enter your credentials to log in.</p>
              <p className='font-normal text-primaryColor'>3. Click on the Login button. You should be redirected to the homepage of the setting panel.</p>
            </div>
          }
        />
        
        {/* Step 2 */}
        <div className='flex gap-3 items-center'>
          <MdKeyboardDoubleArrowRight className='text-h22 text-primaryColor' />
          <h1 id='step2' className='left-10 text-h22 font-medium text-primaryColor py-10'>
            Step 2: Start generating API with iDATA
          </h1>
        </div>
        <p className='text-secondaryColor pb-3 font-normal text-h16'>
          You can start to generate API with iDATA by:
        </p>
        <DropdownComponent
          title="Generate with import files"
          content={
            <div>
              <p className='font-normal text-primaryColor'>In our platform helps you create APIs by importing data from various file formats. Get started by importing the type of file you want to import and defining your API structure.</p>
              <p className='font-normal text-primaryColor py-2'>We&apos;ll guide you through the process of generating a functional API based on your data.</p>
              <p className='text-primaryColor font-normal py-2'>🛠  Let&apos;s build some APIs!</p>
              <div className="my-4">
                <Image width={300} height={100} src="/seamey/import-file.png" alt="Generate API with Import files" className="w-full h-auto" />
              </div>
              <p className="text-secondaryColor inline">Note: </p>
              <p className='text-primaryColor font-normal inline'>Make sure your files are excel files, JSON or SQL files</p>
            </div>
          }
        />
        
        <div className='py-5'>
          <DropdownComponent
            title="Generate with URL"
            content={
              <div>
                <p className='font-normal text-primaryColor'>In our platform helps you create APIs by pasting the URL of the website you want to scrape data from. You just paste the URL you want to scrape data for your API.</p>
                <p className='text-primaryColor font-normal py-2'>🛠  Let&apos;s build some APIs!</p>
                <div className="my-4">
                  <Image width={300} height={100} src="/seamey/URL.png" alt="Generate API with URL" className="w-full h-auto" />
                </div>
              </div>
            }
          />
        </div>
        
        <div className='pb-5'>
          <DropdownComponent
            title="Generate with Schema"
            content={
              <div>
                <p className='font-normal text-primaryColor'>In our platform helps you create APIs by creating schema within. You just input the schema name, table name, field name, and type of field. Over there, the user can link relationships with other tables.</p>
                <p className='text-primaryColor font-normal py-2'>🛠  If done, click the button Start Generate and you will get the result and can test it immediately!</p>
                <div className="my-4">
                  <Image width={300} height={100} src="/seamey/URL.png" alt="Generate API with URL" className="w-full h-auto" />
                </div>
              </div>
            }
          />
        </div>
        
        <h1 className='left-10 text-h22 font-medium text-secondaryColor py-10'>
          🥳 CONGRATULATIONS!
        </h1>
        <p className='text-nearblack pb-3 font-normal text-h16'>
          Now your content is created, published, and you have permissions to request it through the API. Keep on creating amazing content!
        </p>
        <p className='text-secondaryColor pb-3 font-normal text-h16'>Good Luck, have a great day!</p>
      </div>

      {/* Right Sidebar */}
      <button
        className={`pt-[20px] text-gray-400 ${isOpen ? "pl-[220px]" : "hidden"} fixed hover:text-gray-900 lg:hidden`}
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      >
        <GoChevronRight size={32} />
      </button>

      <button
        className={`pt-[20px] text-gray-400 ${isOpen ? "hidden" : "pl-[20px]"} fixed hover:text-gray-900 lg:hidden`}
        onClick={toggleSidebar}
        aria-label="Close sidebar"
      >
        <GoChevronLeft size={32} />
      </button>

      <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
        <Sidebar className='h-screen col-span-1 bg-white fixed md:w-[200px] top-[70px] right-0'>
          <Sidebar.Items>
            <Sidebar.ItemGroup className="fixed top-[70px] z-40">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollToStart(section.id)}
                  className="text-left text-h16 text-gray-400 font-normal"
                >
                  {section.sidebarLabel}
                </button>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </main>
  );
};

export default Page;
