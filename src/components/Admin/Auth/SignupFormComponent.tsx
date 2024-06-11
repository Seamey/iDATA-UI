'use client'

import React from 'react';
import {SignupValues} from "@/lib/definitions";
import Link from "next/link";
import {HiLockClosed, HiMail, HiOutlineX, HiShieldCheck, HiUser} from "react-icons/hi";
import Image from "next/image";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useRouter} from "next/navigation";
import {Button} from "flowbite-react";
import {signIn} from "next-auth/react";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignupFormComponent() {

    const initialValues: SignupValues = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("* First name is required")
            .min(3, "* First name must be at least 3 characters long"),

        lastName: Yup.string()
            .required("* Last name is required")
            .min(3, "* Last name must be at least 3 characters long"),

        username: Yup.string()
            .required("* Username is required")
            .min(3, "* Username must be at least 3 characters long"),

        email: Yup.string()
            .required("* Email is required")
            .email("* Invalid email format"),

        password: Yup.string()
            .required("* Password is required")
            .min(8, "* Password must be at least 8 characters long")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "* Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            ),

        confirmPassword: Yup.string()
            .required("* Confirm password is required")
            .oneOf([Yup.ref('password')], '* Passwords must match'),
    })

    const router = useRouter();

    return (
        <main id={`signup-form`} className={`p-4 md:px-[7.5rem] content-start md:content-center h-screen`}>
            <ToastContainer/>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-x-[130px] w-full h-auto`}>
                <div
                    id={`formControlSignup`}
                    className={`h-full order-last lg:order-none flex flex-col justify-center items-center w-full gap-y-4 lg:gap-y-[10px]`}
                >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            actions.setSubmitting(false)
                            toast.success("Sign up successfully", {
                                theme: "dark",
                                autoClose: 1000,
                                onClose: () => router.push(`/`)
                            })
                        }}
                        validationSchema={validationSchema}
                    >
                        <Form className={`w-full flex flex-col justify-center`}>
                            <div id={`formTitleAndDesc`}
                                 className={`flex flex-col gap-y-2 lg:gap-y-[22px] lg-[20px] mb-2.5`}>
                                <h1 className={`font-semibold text-[34px]`}>Sign up</h1>
                                <div>
                                    <h5 className={`text-[16px]`}>If you already have an account register</h5>
                                    <h5 className={`text-[16px]`}>You can
                                        <span
                                            className={`font-semibold text-secondaryColor ms-[5px] cursor-pointer`}
                                            onClick={() => router.push(`/login`)}>Login</span>
                                    </h5>
                                </div>
                            </div>
                            <div id={`formControl`} className={`flex flex-col gap-y-5`}>
                                <div className={`grid grid-cols-2 gap-x-2.5 `}>
                                    <div className={`flex flex-col`}>
                                        <div className={`flex flex-col gap-y-[10px]`}>
                                            <label
                                                htmlFor={`firstName`}
                                                className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}>
                                                <HiUser/>
                                                First Name
                                            </label>
                                            <Field
                                                name={`firstName`} placeholder={`Boba`}
                                                className={`h-[48px] rounded-full px-[20px]`}/>
                                        </div>
                                        <ErrorMessage
                                            name={`firstName`}
                                            render={msg => <span className={`text-red-700 italic`}>{msg}</span>}/>
                                    </div>
                                    <div className={`flex flex-col`}>
                                        <div className={`flex flex-col gap-y-[10px]`}>
                                            <label
                                                htmlFor={`lastName`}
                                                className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}>
                                                <HiUser/>
                                                Last Name
                                            </label>
                                            <Field
                                                name={`lastName`} placeholder={`Hemechi`}
                                                className={`h-[48px] rounded-full px-[20px]`}/>
                                        </div>
                                        <ErrorMessage
                                            name={`lastName`}
                                            render={msg => <span className={`text-red-700 italic`}>{msg}</span>}/>
                                    </div>
                                </div>
                                <div className={`flex flex-col`}>
                                    <div className={`flex flex-col gap-y-[10px]`}>
                                        <label
                                            htmlFor={`username`}
                                            className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}
                                        >
                                            <HiUser/>
                                            Username
                                        </label>
                                        <Field
                                            name={`username`} placeholder={`Boba Hemechi`}
                                            className={`h-[48px] rounded-full px-[20px]`}/>
                                    </div>
                                    <ErrorMessage
                                        name={`username`}
                                        render={msg => <span className={`text-red-700 italic`}>{msg}</span>}/>
                                </div>
                                <div className={`flex flex-col`}>
                                    <div className={`flex flex-col gap-y-[10px]`}>
                                        <label
                                            htmlFor={`email`}
                                            className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}
                                        >
                                            <HiMail/>
                                            Email
                                        </label>
                                        <Field
                                            name={`email`} placeholder={`example@gmail.com`}
                                            className={`h-[48px] rounded-full px-[20px]`}/>
                                    </div>
                                    <ErrorMessage
                                        name={`email`}
                                        render={msg => <span className={`text-red-700 italic`}>{msg}</span>}/>
                                </div>
                                <div className={`flex flex-col`}>
                                    <div className={`flex flex-col gap-y-[10px]`}>
                                        <label
                                            htmlFor={`password`}
                                            className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}>
                                            <HiLockClosed/>
                                            Password
                                        </label>
                                        <Field
                                            name={`password`} placeholder={`########`}
                                            className={`h-[48px] rounded-full px-[20px]`}/>
                                    </div>
                                    <ErrorMessage
                                        name={`password`}
                                        render={msg => <span className={`text-red-700 italic`}>{msg}</span>}/>
                                </div>
                                <div className={`flex flex-col`}>
                                    <div className={`flex flex-col gap-y-[10px]`}>
                                        <label
                                            htmlFor={`confirmPassword`}
                                            className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}>
                                            <HiShieldCheck/>
                                            Confirm Password
                                        </label>
                                        <Field
                                            name={`confirmPassword`} placeholder={`########`}
                                            className={`h-[48px] rounded-full px-[20px]`}/>
                                    </div>
                                    <ErrorMessage
                                        name={`confirmPassword`}
                                        render={msg => <span className={`text-red-700 italic`}>{msg}</span>}/>
                                </div>
                                <Button type={`submit`}
                                        className={`text-[17px] w-full h-[45px] bg-primaryColor text-white rounded-full`}>
                                    Sign up
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                    <div className={`flex flex-col gap-y-2.5 justify-center items-center`}>
                        <span className={`text-[16px]`}>or continue with</span>
                        <div className={`flex gap-x-[20px] items-center`}>
                            <span onClick={() => signIn("google")}><FcGoogle size={40}/></span>
                            <span onClick={() => signIn("github")}><FaGithub size={36}/></span>
                        </div>
                    </div>
                </div>
                <div
                    id={`formImage`}
                    className={`bg-none lg:bg-auth-background h-auto bg-cover rounded-[20px] flex flex-row-reverse justify-between lg:flex-col gap-y-[50px] lg:py-[30px] lg:px-[30px]`}>
                    <div className={`text-white flex justify-end items-start`}>
                        <Link href={`/`}>
                            <HiOutlineX className={`w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]`}/>
                        </Link>
                    </div>
                    <div className={`flex justify-center lg:order-none order-last`}>
                        <Image
                            src={`/chiso/logos/IDATA_LOGO.png`} alt={`Logo`} className={`hidden lg:block`}
                            width={300} height={300}/>
                        <Image
                            src={`/chiso/logos/IDATA_LOGO.png`} alt={`Logo`} className={`block lg:hidden`} width={100}
                            height={100}/>
                    </div>
                    <div className={`text-center hidden lg:block`}>
                        <h1 className={`font-semibold text-[20px] lg:text-[40px] text-primaryColor`}>Sign up to
                            iDATA</h1>
                        <span
                            className={`text-primaryColor text-[12px] lg:text-[20px]`}>Great to see you, my new member</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignupFormComponent;