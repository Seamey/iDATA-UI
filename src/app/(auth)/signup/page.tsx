import SignupFormComponent from "@/components/Admin/Auth/SignupFormComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Sign up",
    description: "Sign up of iDATA to be iDTA member. Thank you!",
    keywords: ["iDATA", "api", "api-generate", "api-centralize"]
}

function SignupPage() {
    return (
        <>
            <SignupFormComponent/>
        </>
    );
}

export default SignupPage;