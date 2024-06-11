import React from 'react';
import {Metadata} from "next";
import ForgetPasswordFormComponent from "@/components/Admin/Auth/ForgetPasswordFormComponent";

export const metadata:Metadata = {
    title: "Forget Password",
    description: "Are you forget your password? We will reset your password quickly. Thank you!",
    keywords: ["iDATA", "api", "api-generate", "api-centralize"]
}

function ForgetPasswordPage() {
    return (
        <ForgetPasswordFormComponent/>
    );
}

export default ForgetPasswordPage;