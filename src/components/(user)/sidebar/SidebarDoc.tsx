"use client";

import { Sidebar } from "flowbite-react";
import { sideBarItem } from "./userGuideMenu";
import { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export default function ComponentSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div>
      <button
        className={`pt-[20px] text-white] ${
          isOpen ? "pl-[220px]" : "hidden"
        } fixed hover:text-primaryColor lg:hidden`}
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      >
        <GoChevronRight size={24} />
      </button>

      <button
        className={`pt-[20px] text-whitee] ${
          isOpen ? "hidden" : "pl-[20px]"
        } fixed hover:text-primaryColor lg:hidden`}
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      >
        <GoChevronLeft size={24} />
      </button>

      <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
        <Sidebar className={`h-[92.5vh] `} aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="fixed top-[70px] z-40">
              {sideBarItem.map((item, index) => (
                <Sidebar.Item key={index} href={item.path} icon={item.icon}>
                  {item.title}
                </Sidebar.Item>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}