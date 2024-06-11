import InsideSidebarComponent from "@/components/(admin)/sidebar/InsideSidebarComponent";
import HeaderComponent from "@/components/(admin)/header/HeaderComponent";
import { Metadata } from "next";
import { GrOverview } from "react-icons/gr";
import OverviewCard from "@/components/(admin)/card/overview/OverviewCard";
import { overviewCardData } from "@/components/(admin)/card/overview/overviewCardData";
import GenerateApiCardComponent from "@/components/(admin)/card/generateApi/GenerateApiCardComponent";
import { generateApiCardData } from "../../../components/(admin)/card/generateApi/generateApiCardData";

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to iDATA",
    keywords: ["api", "generate api", "mocking api", "api platform", "cambodian api"]
};

export default function Home() {
    return (
        <>
            <div className="flex gap-3 items-center mb-2">
                <GrOverview className="text-h20" />
                <p className="text-h20 font-semibold">Overview</p>
            </div>
            <p className="text-h14 text-descriptionColor">Sum of all your activites and ready to start new one!</p>
            <div className="grid md:grid-cols-4 sm:grid-cols-1 sm:gap-10  md:gap-4 items-center sm:w-full">
                {overviewCardData.map((data, index) => (
                    <OverviewCard
                        key={index}
                        count={data.count}
                        label={data.label}
                        icon={data.icon}
                        bgColor={data.bgColor}
                    />
                ))}
            </div>
            <div className="flex flex-wrap justify-center md:justify-between md:gap-8 mt-2 items-center sm:w-full">
                {generateApiCardData.map((data, index) => (
                    <GenerateApiCardComponent
                        key={index}
                        url={data.url}
                        title={data.title}
                        desc={data.desc}
                        image={data.image}
                        icon={data.icon}
                    />
                ))}
            </div>

        </>
    );
}