'use client'

import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineBriefcase, HiOutlineBell } from "react-icons/hi";
import { Avatar } from "flowbite-react";
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { IoSettingsOutline } from "react-icons/io5";
import { FiUser, FiLogOut } from "react-icons/fi";
import ThemeSwitch from '@/components/(user)/header/layout/ThemeSwitch';
import Modal from '../notification/Notification';

export default function HeaderComponent() {
    const { data: session } = useSession();
    const isLoggedIn = !!session;
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setModalOpen] = useState(false);

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
        <div className='hidden lg:block w-full'>
            <div className='text-primaryColor dark:text-white flex items-center justify-between '>
                <p>
                    <span className='text-h16 font-semibold'>Welcome Back, </span>
                    Capybara 👋
                </p>

                <div className='flex items-center gap-4 ml-auto'>
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
                                        <li className='text-primaryColor'><Link href="/dashboard/viewprofile"><FiUser className='w-5 h-5 mr-2 text-primaryColor' />View Profile</Link></li>
                                        <li className='py-3 text-primaryColor'><Link href="/dashboard/editprofile"><IoSettingsOutline className='w-5 h-5 mr-2 text-primaryColor' />Edit Profile</Link></li>
                                        <li className='text-red-600'><Link href="#"><FiLogOut className='w-5 h-5 mr-2 text-red-600' />Log out</Link></li>
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
                                        <li className='text-primaryColor'><Link href="/dashboard/viewprofile"><FiUser className='w-5 h-5 mr-2 text-primaryColor' />View Profile</Link></li>
                                        <li className='py-3 text-primaryColor'><Link href="/dashboard/editprofile"><IoSettingsOutline className='w-5 h-5 mr-2 text-primaryColor' />Edit Profile</Link></li>
                                        <li className='text-red-600'><Link href="#"><FiLogOut className='w-5 h-5 mr-2 text-red-600' />Log out</Link></li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal for notifications */}
            <Modal isVisible={isModalOpen} onClose={toggleModal}>
                <div className="flex gap-3 text-h18">
                    <HiOutlineBell className='pb-8 w-16 h-16' />
                    <div>
                        <p className="text-secondaryColor pb-2">Updates</p>
                        <p>Here&apos;s come our latest update of the website, Stay tuned!</p>
                    </div>
                </div>
            </Modal>

        </div>
    );
}
