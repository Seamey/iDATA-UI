import LoginFormComponent from "@/components/Admin/Auth/LoginFormComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your iDATA API Panel. Thank you!",
    keywords: ["iDATA", "api", "api-generate", "api-centralize"]
}

function LoginPage() {
    return (
       <>
           <LoginFormComponent/>
       </>
    );
}

export default LoginPage;