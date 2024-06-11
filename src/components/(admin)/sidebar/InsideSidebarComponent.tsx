'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Sidebar } from "flowbite-react";
import { HiOutlineBriefcase, HiOutlinePuzzle, HiOutlineBell } from "react-icons/hi";
import { GrOverview } from "react-icons/gr";
import { LuFileBox } from "react-icons/lu";
import { TbNewSection } from "react-icons/tb";
import { FaRegFile, FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSchema } from "react-icons/md";
import { useSession } from "next-auth/react";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Avatar } from "flowbite-react";
import { IoSettingsOutline } from "react-icons/io5";
import { TiFolderOpen } from "react-icons/ti";
import { IoIosLink } from "react-icons/io";
import ThemeSwitch from "@/components/(user)/header/layout/ThemeSwitch";
import Notification from "../notification/Notification";

export default function InsideSidebarComponent() {
    const { data: session } = useSession();
    const isLoggedIn = !!session;
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside as any);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside as any);
        };
    }, []);

    return (
        <>
            <div className="w-full py-2 text-primaryColor bg-white lg:hidden flex justify-between">
                <button data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm bg-white text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleSidebar}>
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <div className="flex items-center gap-4 pr-5">
                    <ThemeSwitch />
                    <Link href="/dashboard">
                        <HiOutlineBriefcase className='h-6 w-6' />
                    </Link>
                    <div className="indicator" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-warning top-2 right-1 indicator-item"></span>
                    </div>
                    {!isLoggedIn && (
                        <div>
                            <div className="dropdown dropdown-end mt-2" ref={dropdownRef}>
                                <div tabIndex={0} role='button' onClick={toggleDropdown}>
                                    <Avatar alt="User profile" img="/assets/IDATA_LOGO.png" rounded bordered color="blue" />
                                </div>
                                {isDropdownOpen && (
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu mt-2 px-2 py-4 shadow bg-base-100 rounded-box w-52">
                                        <li><Link href="/dashboard/viewprofile"><FiUser className='w-5 h-5 mr-2 text-primaryColor' />View Profile</Link></li>
                                        <li className='py-3'><Link href="/dashboard/editprofile"><IoSettingsOutline className='w-5 h-5 mr-2 text-primaryColor' />Edit Profile</Link></li>
                                        <li><Link href="#"><FiLogOut className='w-5 h-5 mr-2 text-danger' />Log out</Link></li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                    {isLoggedIn && (
                        <div>
                            <div className="dropdown dropdown-end mt-2" ref={dropdownRef}>
                                <div tabIndex={0} role='button' onClick={toggleDropdown}>
                                    <Avatar alt="User profile" img="/assets/IDATA_LOGO.png" rounded bordered color="blue" />
                                </div>
                                {isDropdownOpen && (
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu mt-2 px-2 py-4 shadow bg-base-100 rounded-box w-52">
                                        <li><Link href="/dashboard/viewprofile"><FiUser className='w-5 h-5 mr-2 text-primaryColor' />View Profile</Link></li>
                                        <li className='py-3'><Link href="/dashboard/editprofile"><IoSettingsOutline className='w-5 h-5 mr-2 text-primaryColor' />Edit Profile</Link></li>
                                        <li><Link href="#"><FiLogOut className='w-5 h-5 mr-2 text-danger' />Log out</Link></li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {/* Modal for notifications */}
                <Notification isVisible={isModalOpen} onClose={toggleModal}>
                    <div className="flex gap-3 text-h18">
                        <HiOutlineBell className='pb-8 w-16 h-16' />
                        <div>
                            <p className="text-secondaryColor pb-2">Updates</p>
                            <p>Here&apos;s come our latest update of the website, Stay tuned!</p>
                        </div>
                    </div>
                </Notification>
            </div>

            <Sidebar id="logo-sidebar"
                className={`fixed lg:sticky left-0 z-40 lg:z-0 sm:h-96 lg:h-screen text-primaryColor dark:text-white transition-transform ${isSidebarOpen ? '' : '-translate-x-full lg:translate-x-0'
                    }`}
                aria-label="Sidebar">
                <Sidebar.ItemGroup className="h-full py-4 overflow-y-auto dark:bg-gray-800">
                    <div className="w-full pb-5 text-h22 font-semibold">
                        <Link className="flex items-center gap-3" href={"/dashboard"}>
                            <HiOutlinePuzzle />
                            <p>Project</p>
                        </Link>
                    </div>
                    <Sidebar.Collapse icon={LuFileBox} label="Generate API"
                        className={`text-primaryColor rounded-full text-h14`}>
                        <Sidebar.Item size={12} icon={GrOverview} href="/generateApi"
                            className={`text-primaryColor rounded-full text-h14`}>Overview
                        </Sidebar.Item>
                        <Sidebar.Collapse icon={MdOutlineSchema} label="Schema"
                            className={`text-primaryColor rounded-full text-h14`}>
                            <Sidebar.Item size={14} icon={TbNewSection} href="#"
                                className={`text-primaryColor rounded-full text-h14`}>New
                            </Sidebar.Item>
                            <Sidebar.Collapse icon={TiFolderOpen} label="Sample Schema"
                                className={`text-primaryColor rounded-full text-h14`}>
                                <Sidebar.Item size={14} icon={MdOutlineSchema} href="#"
                                    className={`rounded-full text-h14`}>M-Banking
                                </Sidebar.Item>
                                <Sidebar.Item size={14} icon={MdOutlineSchema} href="#"
                                    className={`rounded-full text-h14`}>E-Commerce
                                </Sidebar.Item>
                                <Sidebar.Item size={14} icon={MdOutlineSchema} href="#"
                                    className={` rounded-full text-h14`}>E-Learning
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                        </Sidebar.Collapse>
                        <Sidebar.Item size={12} icon={FaRegFile} href="#"
                            className={`text-primaryColor rounded-full text-h14`}>File
                        </Sidebar.Item>
                        <Sidebar.Item size={14} icon={IoIosLink} href="#"
                            className={`text-primaryColor rounded-full text-h14`}>URL
                        </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={FaRegFileAlt} className={'text-h14 mt-5 rounded-full'}>
                        Documentation
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar>
        </>
    );
}
