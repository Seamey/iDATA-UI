'use client';

import { useState, useEffect } from "react";
import DashboardCardComponent from "@/components/(admin)/card/dashboard/DashboardCardComponent";
import { dashboardCardData } from "@/components/(admin)/card/dashboard/dashboardCardData";
import { HiOutlineBriefcase, HiPlus } from "react-icons/hi";
import NewProject from "@/components/(admin)/newProject/NewProject";
import { useRouter } from "next/navigation";

export default function Home() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [isRouterReady, setIsRouterReady] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsRouterReady(true);
    }, []);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(e.target.value);
    };

    const handleCreateProject = () => {
        if (projectName) {
            toggleModal();
            if (isRouterReady) {
                router.push(`/generateApi?projectName=${projectName}`);
            }
        }
    };

    return (
        <>
            <div className="flex gap-3 items-center mb-4">
                <HiOutlineBriefcase className="text-h20" />
                <p className="text-h20 font-semibold">Workspace</p>
            </div>
            <div className="flex justify-between items-center gap-3 mb-4">
                <form className="flex items-center max-w-sm w-full">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-backgroundColor border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-primaryColor focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                    </div>
                </form>
                <button className="bg-primaryColor text-white py-2 px-4 rounded-3xl" onClick={toggleModal}>
                    <div className="flex items-center space-x-2">
                        <HiPlus className="w-5 h-5" />
                        <span className="hidden sm:inline">New Project</span>
                    </div>
                </button>
            </div>
            <div className="flex flex-wrap justify-center md:justify-between sm:gap-10 md:gap-8 items-center sm:w-full">
                {dashboardCardData.map((data, index) => (
                    <DashboardCardComponent
                        key={index}
                        title={data.title}
                        image={data.image}
                        desc={data.desc}
                    />
                ))}
            </div>

            {/* Modal for New Project */}
            {isModalOpen && (
                <NewProject onClose={toggleModal}>
                    <div className="">
                        <h2 className="text-lg font-semibold mb-4">Create New Project</h2>
                        <input
                            type="text"
                            placeholder="Project Name"
                            value={projectName}
                            onChange={handleProjectNameChange}
                            className="w-full p-3 border rounded-3xl mb-4"
                        />
                        <button
                            className="bg-primaryColor text-white py-2 px-4 rounded-3xl"
                            onClick={handleCreateProject}
                        >
                            Create
                        </button>
                    </div>
                </NewProject>
            )}
        </>
    );
}
