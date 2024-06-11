"use client"
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type DropdownProps = {
  title: string;
  content: JSX.Element;
};
const DropdownComponent = ({ title, content }:DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border border-gray-300 rounded-xl">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center rounded-xl w-full p-4 text-left hover:bg-gray-200 focus:outline-none"
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-300">
          {content}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
