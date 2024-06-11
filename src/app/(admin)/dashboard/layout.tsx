import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import SessionWrapper from "../SessionProvider";
import Providers from "@/app/(user)/providers";
import SidebarComponent from "@/components/(admin)/sidebar/SidebarComponent";
import HeaderComponent from "@/components/(admin)/header/HeaderComponent";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "600", "900"] });

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Welcome to iDATA dashboard",
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
                        <main className="bg-backgroundColor dark:bg-slate-600 text-primaryColor">
                            <section className="lg:flex">
                                <SidebarComponent />
                                <div className="grids w-full h-screen">
                                    <div className="w-11/12 mx-auto pt-5">
                                        <HeaderComponent />
                                        <div className="bg-white rounded-3xl my-4 p-10">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </Providers>
                </SessionWrapper>
            </body>
        </html>
    );
}
