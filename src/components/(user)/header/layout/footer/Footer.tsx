import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer ()  {
  return (
    <footer className="bg-white py-12 xl:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Image width={70} height={100} src={"/seamey/IDATA_LOGO_WITH_TEXT_NO_BG.png"} alt="iDATA Logo" className=" mb-4" />
            <p className="text-gray-500 font-normal">Empowering Connectivity, Unleashing Innovation. Your API platform of Choice!</p>
          </div>
          <div className="md:col-span-1 justify-center">
            <h3 className="text-h16 font-semibold text-primaryColor">Resources</h3>
            <div className="mt-4 space-y-2 grid grid-row">
              <Link href="/" className="text-gray-500 font-normal hover:text-secondaryColor">Home</Link>
              <Link href="/products" className="font-normal text-gray-500 hover:text-seondaryColor">Our Products</Link>
              <Link href="/learn" className="font-normal text-gray-500 hover:text-secondaryColor">Learn</Link>
              <Link href="/" className="font-normal text-gray-500 hover:text-secondaryColor">API Generate</Link>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-h16 font-semibold text-primaryColor">Quick Links</h3>
            <div className="mt-4 space-y-2 grid grid-row">
              <Link href="#" className="font-normal text-gray-500 hover:text-secondaryColor">FAQs</Link>
              <Link href="#" className="font-normal text-gray-500 hover:text-secondaryColor">Our Services</Link>
              <Link href="#" className="font-normal text-gray-500 hover:text-secondaryColor">Know Our Team</Link>
             <Link href="#" className="font-normal text-gray-500  hover:text-secondaryColor">Download API</Link>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-h16 font-semibold text-primaryColor">About</h3>
            <div className="mt-4 space-y-2 grid grid-row">
              <Link href="/about-us" className="font-normal text-gray-500 hover:text-secondaryColor">About iDATA</Link>
              <Link href="/contact-us" className="font-normal text-gray-500 hover:text-secondaryColor">Contact & Suppor</Link>
              <Link href="/about-us" className="font-normal text-gray-500 hover:text-secondaryColor">Mission & Vision</Link>
              <Link href="/about-us" className="font-normal text-gray-500 hover:text-secondaryColor">Setting & Privac</Link>
            </div>
          </div>
          <div className="md:col-span-1 ">
            <h3 className="text-sm font-semibold text-primaryColor">Follow Us On</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-blue-500 border border-primaryColor rounded-full p-1.5">
                <span className="sr-only">Facebook</span>
                <FaFacebookF/>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-500 border border-primaryColor rounded-full p-1.5">
                <span className="sr-only ">Twitter</span>
               <FaTwitter/>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-600  border border-primaryColor rounded-full p-1.5">
                <span className="sr-only">YouTube</span>
                <FaYoutube/>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-800 border border-primaryColor rounded-full p-1.5">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin/>
              </Link>
            </div> 
            <div className="py-1.5 text-sm text-gray-500">
              © 2024 CSTAD-iDATA
            </div>
          </div>
          
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
