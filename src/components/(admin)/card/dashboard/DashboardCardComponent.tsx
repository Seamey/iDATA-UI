"use client";

import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { DashboardCardProps } from "@/lib/definitions";

export default function DashboardCardComponent({ title, image, desc }: DashboardCardProps) {
  return (
    <Card className="rounded-3xl w-72">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium text-h18 dark:text-white">{title}</p>
        <div className="flex items-center space-x-2">
          <FaRegHeart className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400" />
          <Dropdown className="rounded-2xl overflow-hidden" inline label="">
            <Dropdown.Item>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <LuPencil />
                Rename Project
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <LuTrash2 />
                Delete Project
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <Link href={"/generateApi"} className="flex flex-col items-center">
        <Image
          alt="image"
          height="150"
          src={image}
          width="150"
          className="mb-3"
        />
        <p className="w-full text-h18 text-gray-900 dark:text-white">{desc}</p>
      </Link>
    </Card>
  );
}
