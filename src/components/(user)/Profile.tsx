import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaGithub, FaGitlab } from 'react-icons/fa';
import { ProfilesType } from '@/lib/definitions';

const Profile: React.FC<ProfilesType> = ({ name, position, quote, fb_social, git_hub, git_lab }) => {
    return (
        <div className='text-center mx-5'>
            <Image
                width={300}
                height={300}
                src={`/images/${name.replace(' ', '_').toLowerCase()}.jpg`}
                alt={`${name}'s Image`}
                className='rounded-full w-[88px] h-[88px] mx-auto mt-10'
            />
            <p className='text-primaryColor text-h22 font-medium'>{name}</p>
            <p className='text-secondaryColor text-h18 font-medium py-5'>{position}</p>
            <p className='text-center text-h16 text-gray-400'>{quote}</p>
            <div className='flex gap-4 justify-center py-1.5'>
                <a href={fb_social} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className='text-blue-500' />
                </a>
                <a href={git_hub} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href={git_lab} target="_blank" rel="noopener noreferrer">
                    <FaGitlab className='text-orange-500' />
                </a>
            </div>
        </div>
    );
};

export default Profile;
