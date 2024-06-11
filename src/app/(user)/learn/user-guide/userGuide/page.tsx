'use client';

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoCopyOutline } from 'react-icons/io5';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import SidebarComponent from '@/components/(user)/sidebar/Content';

const Page = () => {
    const handleScrollToStart = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex w-full bg-backgroundColor dark:bg-black">
            <div className="flex-1 p-10">
                <div className=" pt-3  w-full">
                    <div className="mx-3">
                        <h1 id="quick-start" className="left-10 text-h28 font-medium text-primaryColor mx-10 py-10">
                            User Guide fundamentals
                        </h1>
                        <h2 id="introduction" className="text-h22 text-primaryColor py-4">How to use our platform?</h2>
                        <p className="text-h16 text-nearblack py-4 font-normal">
                            Welcome to  IDATA! Our platform allows you to easily integrate powerful APIs into your applications. Whether you&apos;re looking to enhance your app with machine learning, data processing, or any other API functionality, our platform provides a seamless and user-friendly experience. This documentation will guide you through the process of using our platform, from setting up your account to making your first API call.
                        </p>
                        <h3 className="text-h22 text-primaryColor py-4">Table of content</h3>
                        <ul className="list-disc pl-5">
                            <li>Getting Started</li>
                            <li>Installing API Code</li>
                            <li>Handling Responses</li>
                            <li>Error Handling</li>
                            <li>Examples</li>
                            <li>Best Practices</li>
                        </ul>

                        <section id="getting-started" className="pt-6">
                            <h3 className="text-h22 text-primaryColor py-4">Getting Started</h3>
                            <p className="text-h16 text-nearblack py-4 font-normal">
                                1. Visit our sign-up page.
                            </p>
                            <p className="text-h16 text-nearblack py-4 font-normal">
                                2. Fill out the registration form with your name, email, and password.
                            </p>
                            <p className="text-h16 text-nearblack py-4 font-normal">
                                3. Verify your email address by clicking on the link sent to your inbox.
                            </p>
                            <p className="text-h16 text-nearblack py-4 font-normal">
                                4. Log in to your new account.
                            </p>
                        </section>

                        <section id="installation-code" className="pt-6">
                            <h3 className="text-h22 text-primaryColor py-4">Making API Calls</h3>
                            <p className="text-h16 text-nearblack font-normal">
                            Each API endpoint has a specific URL and accepts certain parameters. Here is a general structure for making an API call:
                            </p>
                            <p className="text-h16 text-nearblack font-normal">
                                1. Choose the endpoint you want to call (e.g., /v1/analyze, /v1/generate).
                            </p>
                            <p className="text-h16 text-nearblack font-normal">
                                2. Include any required parameters in the query string or request body.
                            </p>
                            <p className="text-h16 text-nearblack font-normal">
                                3. Set the appropriate HTTP method (GET, POST, PUT, DELETE).
                            </p>
                            <p className="text-h16 text-nearblack font-normal">
                                4. Log in to your new account.
                            </p>
                            <div className="bg-gray-100 rounded-md mb-4">
                                <code className="text-primaryColor">npm install @your-api/sdk</code>
                                <button
                                    onClick={() => navigator.clipboard.writeText('npm install @your-api/sdk')}
                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                >
                                    <IoCopyOutline />
                                </button>
                            </div>
                        </section>

                        <section id="handling-responses" className="pt-6">
                            <h3 className="text-h22 text-primaryColor py-4">Handling Responses</h3>
                            <p className="text-h16 text-nearblack py-4 font-normal">
                                Example of handling API responses.
                            </p>
                        </section>

                        <section id="error-handling" className="pt-6">
                            <h3 className="text-h22 text-primaryColor py-4">Error Handling</h3>
                            <p className="text-h16 text-nearblack py-4 font-normal">
                                Example of handling errors.
                            </p>
                        </section>

                        <section id="examples" className="pt-6">
                            <h3 className="text-h22 text-primaryColor py-4">Examples</h3>
                            <p className="text-h16 text-nearblack py-4 font-normal">
                                Example usage of the API.
                            </p>
                        </section>

                        <section id="best-practices" className="pt-6">
                            <h3 className="text-h22 text-primaryColor py-4">Best Practices</h3>
                            <p className="text-h16 text-nearblack py-4 font-normal">
                                Follow these best practices to ensure smooth integration.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className={`fixed right-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:relative lg:transform-none`}>
                <button
                    className="p-2 text-gray-500 hover:text-gray-700 lg:hidden"
                    onClick={toggleSidebar}
                    aria-label="Close sidebar"
                >
                    {isOpen ? <GoChevronRight size={32} /> : <GoChevronLeft size={32} />}
                </button>
                <div className="p-4 space-y-2">
                    <button onClick={() => handleScrollToStart("quick-start")} className="block w-full font-normal text-left text-h16 text-gray-400 hover:text-gray-900">Quick Start</button>
                    <button onClick={() => handleScrollToStart("introduction")} className="block w-full font-normal text-left text-h16 text-gray-400 hover:text-gray-900">Introduction</button>
                    <button onClick={() => handleScrollToStart("getting-started")} className="block w-full font-normal text-left text-h16 text-gray-400 hover:text-gray-900">Getting Started</button>
                    <button onClick={() => handleScrollToStart("installation-code")} className="block w-full font-normal text-left text-h16 text-gray-400 hover:text-gray-900">Installing API Code</button>
                    <button onClick={() => handleScrollToStart("handling-responses")} className="block w-full font-normal text-left text-h16 text-gray-400 hover:text-gray-900">Handling Responses</button>
                    <button onClick={() => handleScrollToStart("error-handling")} className="block w-full font-normal text-left text-h16 text-gray-400 hover:text-gray-900">Error Handling</button>
                    <button onClick={() => handleScrollToStart("examples")} className="block w-full font-normal text-left text-h16 text-gray-400 hover:text-gray-900">Examples</button>
                    <button onClick={() => handleScrollToStart("best-practices")} className="block w-full font-normal text-left text-h16 text-gray-400 hover:text-gray-900">Best Practices</button>
                </div>
            </div>
        </div>
    );
};

export default Page;
