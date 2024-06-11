import React, { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { Sidebar } from 'flowbite-react';

type RightSideBarProps = {
    ids: string[];
}

const RightSideBar: React.FC<RightSideBarProps> = ({ ids }) => {
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
        <div>
            <button
                className={`pt-[20px] text-gray-400] ${isOpen ? "pl-[220px]" : "hidden"
                    } fixed hover:text-gray-900 lg:hidden`}
                onClick={toggleSidebar}
                aria-label="Open sidebar"
            >
                <GoChevronRight size={24} />
            </button>

            <button
                className={`pt-[20px] text-gray-400] ${isOpen ? "hidden" : "pl-[20px]"
                    } fixed hover:text-gray-900 lg:hidden`}
                onClick={toggleSidebar}
                aria-label="Open sidebar"
            >
                <GoChevronLeft size={24} />
            </button>
            <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
                <Sidebar className={`h-[90vh] `} aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup className="fixed top-[70px] z-40 ">
                            {ids.map((id, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleScrollToStart(id)}
                                    className="text-left text-h16 text-gray-400 font-normal"
                                >
                                    {id}
                                </button>
                            ))}
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    );
};

export default RightSideBar;
