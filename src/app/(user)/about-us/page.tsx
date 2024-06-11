'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import Profile from '@/components/(user)/Profile';
import { ProfilesType } from '@/lib/definitions';



const Page = () => {
    const [profiles, setProfiles] = useState<ProfilesType[]>([]);
    const [mentorsProfiles, setMentorsProfiles] = useState<ProfilesType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./json/about-us.json');
        console.log(" data",response);
            if (!response.ok) {
            }
            const jsonData = await response.json();
            setProfiles(jsonData.members);
            setMentorsProfiles(jsonData.mentors);
        } 
   

    fetchData();
  }, []);

  
    return (
        <main className="w-full dark:bg-black bg-backgroundColor py-10">
            <div className="container mx-auto text-center">
                <h1 className="md:text-h42 font-semibold text-primaryColor">API Development Platform</h1>
                <h2 className="md:text-h42 font-semibold text-secondaryColor mt-2">Our Journey at IDATA</h2>
            </div>
            {/* what's IDATA? section*/}
            <h1 className="md:text-h34 text-h28 text-center py-6 md:py-10 font-semibold text-primaryColor">What&apos;s IDATA?</h1>
            <div className='w-10/12 mx-auto shadow-xl py-10 md:px-20 rounded-xl'>
                <p className='font-normal text-gray-400 text-center dark:text-white mx-2 text-h12 md:text-h18'>Unlock the full potential of your projects with iDATA. Our comprehensive suite of APIs provides the building blocks you need to create groundbreaking digital experiences. From startups to enterprises, developers trust. Our platform for its simplicity, scalability, and reliability. Join us in shaping the future of technology, one API at a time.</p>
            </div>
            {/* Mission section */}
            <h1 className="md:text-h34 text-h28 text-center pt-20 md:py-20 font-semibold text-primaryColor">What&apos;s our Mission?</h1>
            <div className='flex flex-wrap md:flex-nowrap md:flex-cols-2 w-10/12 justify-between mx-auto gap-3 items-center'>
                <div className='md:w-1/2 '>
                    <h1 className='text-primaryColor py-10 text-h24 md:text-h28 font-medium '>Expertia&apos;s Mission</h1>
                    <p className='text-h20 text-gray-400 font-normal '>Expertia aims to simply text of the printing and
                    typesetting industry. Lorem Ipsum has been
                    the industry&apos;s</p>
                </div>
                <div className='md:w-1/2'>
                    <Image width={300} height={100} src={"/seamey/Mission.png"} alt='Mission Image' className='ml-20' />
                </div>
            </div>
            {/* Vision section */}
            <h1 className="md:text-h34 text-h28 text-center py-6 md:py-20 font-bold text-primaryColor">What&apos;s our Vision?</h1>
            <div className='flex flex-wrap-reverse md:flex-nowrap md:flex-cols-2 w-10/12 justify-between mx-auto gap-3 items-center'>
                <div className='md:w-1/2'>
                    <Image width={300} height={100} src={"/seamey/Vision.png"} alt='Mission Image' className='ml-20' />
                </div>
                <div className='md:w-1/2 md:ml-20'>
                    <h1 className='text-primaryColor text-h24 py-10 md:text-h28 font-medium '>Expertia&apos;s Vision</h1>
                    <p className='font-normal text-h18 md:text-h20 text-gray-400'>To revolutionize the way developers create, manage, and scale APIs by providing an intuitive, powerful, and collaborative platform that empowers innovation, enhances productivity, and ensures security and reliability across all stages of the API lifecycle.</p>
                </div>
            </div>
            {/* Mentors section */}
            <h1 className="md:text-h34 text-h28 font-semibold text-primaryColor text-center pt-8 md:pt-20">Meet Our Mentors</h1>
            <p className='md:text-h20 text-h18 font-normal text-center text-gray-400'>Highly professional and capable of running your business across all digital channels.</p>
            {/* Mentors profiles */}
            <div className='flex w-7/12 mx-auto justify-center'>
        <div className='text-center mx-5'>
          <Image width={300} height={300} src={"/seamey/Cher keo.jpg"} alt='Mentor Image' className='rounded-full w-[88px] h-[88px] mx-auto mt-10' />
          <p className='text-primaryColor text-h22 font-medium my-2'>Kay Keo</p>
          <p className='text-secondaryColor text-h18 font-medium py-2'>Full Stack</p>
          <p className='text-center text-h12 md:text-h16 text-gray-400'>Every bug and error I faced makes me stronger. At this rate, I&apos;ll soon be invincible!</p>
          <div className='flex gap-4 justify ml-14 py-1.5'>
            <FaFacebookF className='text-blue-500 ' />
            <FaGithub />
            <FaGitlab className='text-orange-500'/>
          </div>
        </div>
        
        <div className='text-center mx-5 justify-center'>
          <Image width={300} height={300} src={"/seamey/Cher jessica.jpg"} alt='Mentor Image' className='rounded-full w-[88px] h-[88px] mx-auto mt-10' />
          <p className='text-primaryColor text-h22 font-medium'>Sun Jessica</p>
          <p className='text-secondaryColor text-h18 font-medium py-5'>Full Stack</p>
          <p className='text-center text-h12 md:text-h16 text-gray-400'>if you want the rainbow, you gotta put up with the rain.</p>
          <div className='flex gap-4 text-center ml-14 py-1.5'>
            <FaFacebookF className='text-blue-500 ' />
            <FaGithub />
            <FaGitlab className='text-orange-500'/>
          </div>
        </div>   
      </div>
        <div className='flex w-7/12 mx-auto justify-center'>
            {profiles.map((profile) => (
                <Profile 
                    key={profile.name}
                    name={profile.name}
                    position={profile.position}
                    quote={profile.quote}
                    fb_social={profile.fb_social}
                    git_hub={profile.git_hub}
                    git_lab={profile.git_lab}
                />
            ))}
        </div>
            {/* Team section  */}
            <h1 className="md:text-h34 font-semibold text-primaryColor text-center pt-8 md:pt-20">Meet Our Team</h1>
            <p className='md:text-h20 text-center font-normal text-gray-400'>Highly professional and capable of running your business across all digital channels.</p>
            {/* Team profiles */}
            <div className='grid grid-cols-3 md:w-7/12 mx-auto justify-center'>
                <div className='text-center mx-5'>
                    <Image width={300} height={300} src={"/seamey/Helen.jpg"} alt='Mentor Image' className='rounded-full w-[88px] h-[88px] mx-auto mt-10' />
                    <p className='text-primaryColor text-h22 font-medium'>Leang Helen</p>
                    <p className='text-secondaryColor text-h16 md:text-h18 font-medium py-5'>Front-end Developer</p>
                    <p className='text-center text-h12 md:text-h16 text-gray-400'>It is soon will be the past.</p>
                    <div className='flex gap-4 text-center ml-14 py-1.5'>
                        <FaFacebookF className='text-blue-500 ' />
                        <FaGithub />
                        <FaGitlab className='text-orange-500'/>
                    </div>
                </div>
                <div className='text-center mx-5'>
                    <Image width={300} height={300} src={"/seamey/Me.jpg"} alt='Mentor Image' className='rounded-full w-[88px] h-[88px] mx-auto mt-10' />
                    <p className='text-primaryColor text-h22 font-medium'>Channtha Seamey</p>
                    <p className='text-secondaryColor text-h16 md:text-h18 font-medium py-5'>Front-end Developer</p>
                    <p className='text-center md:text-h16 text-h12 text-gray-400'>Whether you think you can or you can not, you are right.</p>
                    <div className='flex gap-4 text-center ml-14 py-1.5'>
                        <FaFacebookF className='text-blue-500 ' />
                        <FaGithub />
                        <FaGitlab className='text-orange-500'/>
                    </div>
                </div>
                <div className='text-center  mx-5'>
                    <Image width={300} height={300} src={"/seamey/chiso.jpg"} alt='Mentor Image' className='rounded-full w-[88px] h-[88px] mx-auto mt-10' />
                    <p className='text-primaryColor text-h22 font-medium'>Proeung Chiso</p>
                    <p className='text-secondaryColor text-h16 md:text-h18 font-medium py-5'>Front-end Developer</p>
                    <p className='text-center md:text-h16 text-gray-400 text-h12'>Sleepy eye Busy minds.224</p>
                    <div className='flex gap-4 text-center ml-14 py-1.5'>
                        <FaFacebookF className='text-blue-500 ' />
                        <FaGithub />
                        <FaGitlab className='text-orange-500'/>
                    </div>
                </div>
                <div className='text-center mx-5'>
                    <Image width={300} height={300} src={"/seamey/jipor.jpg"} alt='Team Image' className='rounded-full w-[88px] h-[88px] mx-auto mt-10 object-cover' />
                    <p className='text-primaryColor text-h22 font-medium'>Sreng Chipor</p>
                    <p className='text-secondaryColor text-h16 md:text-h18 font-medium py-5'>Back-end Developer</p>
                    <p className='text-center text-h12 md:text-h16 text-gray-400'>Why do Java developers wear glasses? Because they don&apos;t C#.</p>
                    <div className='flex gap-4 text-center ml-14 py-1.5'>
                        <FaFacebookF className='text-blue-500 ' />
                        <FaGithub />
                        <FaGitlab className='text-orange-500'/>
                    </div>
                </div>
                <div className='text-center mx-5'>
                    <Image width={300} height={300} src={"/seamey/Sokcheat.jpg"} alt='Team Image' className='rounded-full w-[88px] h-[88px] mx-auto mt-10' />
                    <p className='text-primaryColor text-h22 font-medium'>Srorng Sokcheat</p>
                    <p className='text-secondaryColor text-h16 md:text-h18 font-medium py-5'>Back-end Developer</p>
                    <p className='text-center text-h12 md:text-h16 text-gray-400'>Let&apos;s grow together.</p>
                    <div className='flex gap-4 text-center ml-14 py-1.5'>
                        <FaFacebookF className='text-blue-500 ' />
                        <FaGithub />
                        <FaGitlab className='text-orange-500'/>
                    </div>
                </div>
                <div className='text-center mx-5'>
                    <Image width={300} height={300} src={"/seamey/Kang.jpg"} alt='Team Image' className='rounded-full w-[88px] h-[88px] mx-auto mt-10' />
                    <p className='text-primaryColor text-h22 font-medium'>Kay Kang</p>
                    <p className='text-secondaryColor text-h16 md:text-h18 font-medium py-5'>Back-end Developer</p>
                    <p className='text-center text-h12 md:text-h16 text-gray-400'>What you think what you Get.</p>
                    <div className='flex gap-4 text-center ml-14 py-1.5'>
                        <FaFacebookF className='text-blue-500 ' />
                        <FaGithub />
                        <FaGitlab className='text-orange-500'/>
                    </div>
                 </div> 
             </div>
        </main>
    );
};

export default Page;
