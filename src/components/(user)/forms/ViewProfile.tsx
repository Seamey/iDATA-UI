'use client'

import React from 'react';
import Image from "next/image";
import {HiOutlineCamera} from "react-icons/hi";
import {Button} from "flowbite-react";
import { CiUser } from "react-icons/ci";

function ViewProfileComponent() {
    return (
        <div
            id={`update-profile-card`}
            className={`flex flex-col lg:flex-row gap-x-5 gap-y-5 py-5 px-[20px] lg:px-[60px]`}
        >
            <div
                className={`w-11/12 lg:w-[400px] h-[400px] flex flex-col items-center justify-center bg-white rounded-[20px]`}>
                <div className={`relative`}>
                    <div
                        className={`absolute top-[200px] left-[180px] bg-primaryColor border-2 border-white p-1 rounded-full hover:cursor-pointer`}
                    >
                        <HiOutlineCamera size={24} color={`white`}/>
                    </div>
                    <Image
                        src={`/seamey/SokCheat.jpg`}
                        alt={`profile-image`}
                        width={250}
                        height={250}
                        className={`rounded-full`}
                    />
                </div>
                <div className={`text-secondaryColor`}>
                    @Sokcheat
                </div>
            </div>
            <div className={`flex flex-col gap-y-[20px] p-[25px] lg:p-[50px] bg-white rounded-[20px] grow`}>
                <div className={`flex items-center gap-x-2.5 text-primaryColor`}>
                    <CiUser size={24}/>
                    <span className={`border-b-2 border-secondaryColor`}>
                        User Information
                    </span>
                </div>
                <div className={`grid grid-cols-2 gap-5`}>
                    <div className={`flex flex-col`}>
                        <label htmlFor={`firstName`} className={`text-[16px] text-fontSecondary`}>First Name</label>
                        <input
                            id={`firstName`}
                            name={`firstName`}
                            value={`Sok`}
                            className={`h-[46px] text-primaryColor border-[1px] bg-white border-gray-300 rounded-full ps-[20px]`}
                        />
                    </div>
                    <div className={`flex flex-col`}>
                        <label htmlFor={`lastName`} className={`text-[16px] text-fontSecondary`}>Last Name</label>
                        <input
                            id={`lastName`}
                            name={`lastName`}
                            value={`Cheat`}
                            className={`h-[46px] text-primaryColor border-[1px] bg-white border-gray-300 rounded-full ps-[20px]`}
                        />
                    </div>
                </div>
                <div className={`flex flex-col`}>
                    <label htmlFor={`email`} className={`text-[16px] text-fontSecondary`}>Email</label>
                    <input
                        id={`email`}
                        name={`email`}
                        value={`sokcheat@gmail.com`}
                        className={`h-[46px] text-primaryColor border-[1px] bg-white border-gray-300 rounded-full ps-[20px]`}
                    />
                </div>
                <Button
                    pill
                    color={`blue`}
                    className={`bg-primaryBlue`}
                >
                    Update Profile
                </Button>
            </div>
        </div>
    );
}

export default ViewProfileComponent;
