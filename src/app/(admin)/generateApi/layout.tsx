import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import SessionWrapper from "../SessionProvider";
import Providers from "../../(user)/providers";
import InsideSidebarComponent from "@/components/(admin)/sidebar/InsideSidebarComponent";
import HeaderComponent from "@/components/(admin)/header/HeaderComponent";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "600", "900"] });

export const metadata: Metadata = {
    title: "GenerateApi",
    description: "Welcome to iDATA generate api",
    keywords: ["api", "generate api", "mocking api", "api platform", "cambodian api"]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <SessionWrapper>
                    <Providers>
                        <div className="bg-backgroundColor dark:bg-slate-600 text-primaryColor">
                            <section className="lg:flex">
                                <InsideSidebarComponent />
                                <div className="grids w-full h-screen">
                                    <div className="w-11/12 mx-auto pt-5">
                                        <HeaderComponent />
                                        <div className="bg-white rounded-3xl my-4 p-10">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Providers>
                </SessionWrapper>
            </body>
        </html>
    );
}
