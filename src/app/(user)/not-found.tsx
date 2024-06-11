"use client"

import { Button } from 'flowbite-react'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const NotFoundpage = () => {
    const route = useRouter()
    return (
        <>
            <section>
                <div className="text-black bg-white">
                    <div className="flex h-screen justify-center">
                        <div className="m-auto text-center">
                            <div>
                               <Image width={1000} height={100} src={"/seamey/error.png"} alt='Error image' />
                            </div>
                           <div className='grid justify-center'>
                           <p className="text-h40 font-normal md:text-base text-primaryColor p-2 mb-4">We Can’t Seem To Find The Page You’re Looking For.
                            </p>
                            <p className="text-h20 font-normal md:text-base text-primaryColor p-2 mb-4">Oops! The page you are looking for does not exits. It might have been moved or deleted.
                            </p>
                            <Button onClick={()=>route.push("/")} className='text-primaryColor border border-primaryColor bg-white'>Go to Home</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFoundpage
