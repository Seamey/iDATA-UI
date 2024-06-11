"use client";

import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { Sidebar } from "flowbite-react";
import { Section } from "@/lib/definitions";

type PageProps = {
    sections: Section[];
}

const Content: React.FC<PageProps> = ({ sections }) => {
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
        <main className='dark:bg-black bg-backgroundColor'>
            <div className='grid grid-col-4 justify-between'>
                <div className='w-9/12 col-span-3 mx-5 mt-10'>
                    {sections.map((section) => (
                        <div key={section.id}>
                            <h1 id={section.id} className='flex items-center text-h26 font-medium text-primaryColor mx-10 py-10'>
                                <MdKeyboardDoubleArrowRight className='text-h24 text-primaryColor' />
                                {section.title}
                            </h1>
                            {section.subtitle && (
                                <div className='flex gap-3 items-center'>
                                    <FaArrowRight className='text-h22 text-primaryColor' />
                                    <p className='text-h20 text-primaryColor py-4'>{section.subtitle}</p>
                                </div>
                            )}
                            <p className='text-nearblack font-normal text-h16'>{section.content}</p>
                        </div>
                    ))}
                </div>

                {/* right-sidebar */}
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
            </div>
        </main>
    );
};

export default Content;
