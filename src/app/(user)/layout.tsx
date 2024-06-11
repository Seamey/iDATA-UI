import { Suspense } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Error from "./error";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import NavbarComponent from "@/components/(user)/header/layout/navbar/NavbarComponent";
import Providers from "./providers";
import Footer from "@/components/(user)/header/layout/footer/Footer";

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
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <header>
            <NavbarComponent />
          </header>
          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </ErrorBoundary>
          <Footer />
        </Providers>
      </body>

    </html>
  );
}
