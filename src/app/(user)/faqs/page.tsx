"use client";

import { Accordion } from "flowbite-react";

import React from 'react'

const page = () => {
    return (
        <main className='w-full mx-auto bg-backgroundColor dark:bg-black'>
            <h1 className='text-center text-h34 md:text-h42 font-medium text-primaryColor md:pt-20'>Frequently Asked Questions</h1>
            <div className="w-11/12 mx-auto py-20">
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title className="text-primaryColor">How do I sign up for IDATA?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 font-normal text-gray-400 dark:text-gray-400">
                                You can sign up for iData by visiting our signup page and filling out the registration form. You&apos;ll need to provide basic information such as your name, email address, and create a password.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-primaryColor">How does IDATA ensure the security of my APIs?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 font-normal text-gray-400 dark:text-gray-400">
                                iDATA ensures the security of your APIs through multiple layers of protection. We employ robust authentication mechanisms, including OAuth integration with Google and GitHub, to ensure only authorized users can access and manage their APIs.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-primaryColor">What features does IDATA offer?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
                                iDATA offers a comprehensive suite of features designed to simplify data scraping, collection, and API generation:

                                Data Scraping/Data Collection: Import URLs from other websites to generate APIs effortlessly.
                                Schema Generation: Automatically generate schemas based on the imported data.
                                API Generation: Create APIs by importing existing data files.
                                Free Endpoints: Access free API endpoints for various uses.
                                JSON File Download: Download data in JSON format.
                                Postman Integration: Import JSON files directly into Postman for easy testing.
                                Swagger Testing: Utilize Swagger for environment testing and API documentation.
                                User Authentication: Login through Google and GitHub for secure access.
                            </p>


                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-primaryColor">Is there a free trial available?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
                            Yes, iDATA offers a free trial that allows you to explore our platform&apos;s capabilities. During the trial period, you can access core features like data scraping, schema generation, and API creation to understand how iDATA can meet your data and API needs.

                            </p>
                          
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-primaryColor">Does IDATA offer analytics?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
                            Yes, iDATA offers analytics to help you monitor and optimize your API usage. Our analytics tools provide insights into API performance, usage patterns, and other critical metrics, enabling you to make informed decisions and improve your data services.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-primaryColor">Where can I find the documentation for IDATA?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
                            You can find comprehensive documentation for iDATA on our website. Our documentation includes detailed guides, tutorials, and API references to help you get started and make the most of our platform. Visit the documentation section on our website for more information and support.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </main>
    )
}

export default page
