import { Metadata } from "next";
import { LuHistory } from "react-icons/lu";
import HistoryCardComponent from "@/components/(admin)/card/history/HistoryCardComponent";
import { historyCardData } from "@/components/(admin)/card/history/historyCardData";


export const metadata: Metadata = {
    title: "Dashboard history",
    description: "Welcome to iDATA history",
    keywords: ["api", "generate api", "mocking api", "api platform", "cambodian api"]
};

export default function Home() {
    return (
        <>
            <div className="flex gap-3 items-center mb-4">
                <LuHistory className="text-h20" />
                <p className="text-h20 font-semibold">History</p>
            </div>
            <form className="flex items-center w-full">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-backgroundColor border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-primaryColor focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                </div>
            </form>
            <div className="w-fit gap-3 items-center mb-2 mt-4 text-h14 flex justify-between">
                <p>Activity Weeklog</p>
                <form className="max-w-sm mx-auto">
                    <select className="bg-gray-50 border border-gray-300 text-primaryColor text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Weekly</option>
                        <option value="Month">Monthly</option>
                        <option value="Year">Yearly</option>
                    </select>
                </form>
            </div>
            <div className="w-full flex justify-between flex-wrap">
                {historyCardData.map((data, index) => (
                    <HistoryCardComponent
                        key={index}
                        title={data.title}
                        count={data.count}
                        bgColor={data.bgColor}
                    />
                ))}
            </div>
        </>
    );
}