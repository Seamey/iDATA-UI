
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Providers from "../../providers";
import ComponentSidebar from "@/components/(user)/sidebar/SidebarDoc";
import NavbarComponent from "@/components/(user)/header/layout/navbar/NavbarComponent";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "600", "900"] });

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
      <NavbarComponent />
      <aside className="flex">
        <ComponentSidebar />
        {children}
      </aside>
    </Providers>

  );
}
