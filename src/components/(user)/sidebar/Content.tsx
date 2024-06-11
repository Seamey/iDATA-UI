 "use client"
import { HiOutlineHome, HiInbox } from "react-icons/hi";
import { VscDebugStart } from "react-icons/vsc";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";


export default function SidebarComponent() {
    
    return (
        <>
            <button
                data-drawer-target="cta-button-sidebar"
                data-drawer-toggle="cta-button-sidebar"
                aria-controls="cta-button-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
              <IoIosArrowForward/>
            </button>

            <aside
                id="cta-button-sidebar"
                className="fixed md:top-[70px] left-0 z-40 transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-screen px-3 py-4 overflow-y-auto bg-white dark:bg-primaryColor">
                    <div className="space-y-2 font-medium">
                        <Link href="/learn/developer-guide" passHref>
                            <div className="flex items-center pr-3 p-2 text-primaryColor rounded-full dark:text-white hover:bg-primaryColor hover:text-white dark:hover:bg-primaryColor group">
                              <HiOutlineHome/>
                                <span className="ms-3 font-normal">Introduction</span>
                            </div>
                        </Link>
                    </div>
                    <div className="space-y-2 font-medium">
                        <Link href="/learn/developer-guide/quick-start" passHref>
                            <div className=" font-normal flex items-center pr-3 p-2 text-primaryColor rounded-full dark:text-white hover:bg-primaryColor hover:text-white dark:hover:bg-primaryColor group">
                               <VscDebugStart className="text-h16"/>
                                <span className="ms-3 font-normal">Quick Start Guide</span>
                            </div>
                        </Link>
                    </div>
                    <div className="space-y-2 font-medium">
                        <Link href="/faqs" passHref>
                            <div className="font-normal flex items-center pr-3 p-2 text-primaryColor rounded-full dark:text-white hover:bg-primaryColor hover:text-white dark:hover:bg-primaryColor group">
                              <GoQuestion/>
                                <span className="ms-3 font-normal">FAQs</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>


        </>

    );
}
