
"use client"

import React from 'react';
import Image from 'next/image';


function Herocomponent() {
    return (
        <>
            <section className=" w-full bg-cover bg-center bg-no-repeat bg-[url('/seamey/background.png')] md:h-screen  flex items-center">
                <div className="mx-auto max-w-screen-xl text-center pt-10 md:pt-32 pb-5">
                    <h1 className="my-6 font-semibold tracking-tight leading-none text-primaryColor text-h28 md:text-h42">Empowering Connectivity, Innovation</h1>
                    <p className="mb-8 text-xl font-normal text-secondaryColor lg:text-h42 sm:px-16 ">Your API platform of choice!</p>
                    <p className="mb-8 text-h16 font-normal text-primaryColor md:text-h24 sm:px-16 ">Download, Test, Document, Mock And Build APIs more Flexible.</p>
                    <p className="text-h14 font-normal text-primaryColor md:text-h16 sm:px-16 mb-3">Ready to bring an API to life?</p>
                    <button className="inline-flex justify-center text-h14 items-center px-3 py-1.5 md:py-3 md:px-5 md:text-base font-medium text-center text-secondaryColor rounded-full border border-secondaryColor hover:border-primaryColor hover:bg-primaryColor hover:text-white focus:ring-4"> Generate API
                    </button>
                </div>

            </section>
        </>

    );
};

export default Herocomponent;
