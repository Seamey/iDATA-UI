
import { Suspense } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Providers from "../../providers";
import NavbarComponent from "@/components/(user)/header/layout/navbar/NavbarComponent";
import DashboardSidebar from "@/components/(user)/sidebar/leftSideBar/Component";


const poppins = Poppins({subsets: ["latin"], weight: ["300", "500", "600", "900"]});

export const metadata: Metadata = {
  title: "iDATA",
  description: "Welcome to iDATA",
  keywords: ["api", "generate api", "mocking api", "api platform", "cambodian api"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <Providers>
            <NavbarComponent/>
          
          <aside className="flex">
            <DashboardSidebar/>
            {children}
          </aside>   
           
        </Providers>
      
  );
}
