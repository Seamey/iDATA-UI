import React from "react";
import "@/app/globals.css";
import {Metadata} from "next";
import SessionWrapper from "@/app/SessionWrapper";
import {Poppins} from "next/font/google";
import Loading from "@/app/(auth)/loading";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: {
        template: "iDATA - %s",
        default: "iDATA - Login"
    },
    keywords: ["iDATA", "api", "api-generate", "api-centralize"],
    description: 'To go your API Panel',
    openGraph: {
        title: {
            template: "iDATA - %s",
            default: "iDATA"
        },
        description: "To go your API Panel",
        images: [
            "https://www.dckap.com/wp-content/uploads/2023/06/API-Integration-Blog-header.png"
        ]
    }
}

const poppins = Poppins({subsets: ["latin"], weight: ["300", "600", "900"]});

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <SessionWrapper>
            <html lang="en">
            <body className={poppins.className}>
            <Suspense fallback={<Loading/>}/>
            {children}
            </body>
            </html>
        </SessionWrapper>
    )
}
