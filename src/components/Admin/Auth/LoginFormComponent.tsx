'use client'

import React from 'react';
import "@/app/(auth)/styles.module.css"
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import {LoginValues} from "@/lib/definitions";
import {Button} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {HiMail, HiLockClosed, HiOutlineX} from "react-icons/hi";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

function LoginFormComponent() {
    const initialValues: LoginValues = {
        email: "",
        password: "",
        rememberMe: false
    }

    const validationSchema = yup.object({
        email: yup.string().required("* email is required").email(),
        password: yup.string().required("* Password is required"),
    })

    const router = useRouter();
    return (
        <main id="login-form" className={`p-4 md:px-5 lg:px-[7.5rem] content-start lg:content-center h-screen`}>
            <ToastContainer/>
            <div className={`grid grid-cols-1 lg:grid-cols-2 md:gap-x-5 lg:gap-x-[8.125rem] w-full h-auto`}>
                <div
                    id={`formControlLogin`}
                    className={`h-full order-last lg:order-none flex flex-col justify-center items-center w-full gap-y-4 md:gap-y-[10px]`}>
                    <Formik initialValues={initialValues}
                            onSubmit={(values, actions) => {
                                console.log(values)
                                actions.setSubmitting(false)
                                toast.success("Login successfully", {
                                    theme: "dark",
                                    autoClose: 1000,
                                    onClose: () => router.push(`/`)
                                })
                            }}
                            validationSchema={validationSchema}
                    >
                        <Form className={`w-full flex flex-col justify-center`}>
                            <div
                                id={`formTitleAndDesc`}
                                className={`flex flex-col gap-y-2 lg:gap-y-[22px] lg-[20px] mb-2.5`}>
                                <h1 className={`text-[34px] font-semibold`}>Login</h1>
                                <div>
                                    <h5 className={`text-[16px]`}>If you don’t have an account register</h5>
                                    <h5 className={`text-[16px]`}>You can
                                        <span
                                            className={`font-semibold text-secondaryColor ms-[5px] cursor-pointer`}
                                            onClick={() => router.push(`/signup`)}>register</span>
                                    </h5>
                                </div>
                            </div>
                            <div id={`formControl`} className={`flex flex-col gap-y-5`}>
                                <div className={`flex flex-col`}>
                                    <div className={`flex flex-col gap-y-[10px]`}>
                                        <label
                                            htmlFor={`email`}
                                            className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}><HiMail/>Email</label>
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
                                <div className={`flex flex-row justify-between`}>
                                    <div className={`flex gap-x-[10px] justify-center items-center`}>
                                        <Field name={`rememberMe`} type={`checkbox`} className={`rounded-md`}/>
                                        <span className={`text-[12px]`}>Remember me</span>
                                    </div>
                                    <Link href={`/forget-password`} className={`text-secondaryColor text-[12px]`}>
                                        Forgot Password ?
                                    </Link>
                                </div>
                                <Button type={`submit`}
                                        className={`text-[17px] w-full h-[45px] bg-primaryColor text-white rounded-full`}>
                                    Login
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
                        <h1 className={`text-[20px] md:text-[40px] text-primaryColor font-semibold`}>Login to iDATA</h1>
                        <span className={`text-primaryColor text-[12px] md:text-[20px]`}>Nice to see you again!</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginFormComponent;