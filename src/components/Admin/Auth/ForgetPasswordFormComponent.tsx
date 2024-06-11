'use client'

import React from 'react';
import {ForgetPasswordValues} from "@/lib/definitions";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import {HiLockClosed, HiShieldCheck, HiOutlineX, HiMail} from "react-icons/hi";
import Link from "next/link";
import {Button} from "flowbite-react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgetPasswordFormComponent() {

    const initialValues: ForgetPasswordValues = {
        email: "",
        oldPassword: "",
        newPassword: "",
    }

    const validationSchema = yup.object({
        email: yup.string()
            .required("* email is required")
            .email("* Invalid email address"),
        oldPassword: yup.string()
            .required("* Old Password is required")
            .min(8, "* Password must be at least 8 characters long"),
        newPassword: yup.string()
            .required("* New Password is required")
            .oneOf([yup.ref("oldPassword")], "* Password does not match"),
    });

    const router = useRouter();

    return (
        <main id={`forget-password-form`} className={`p-4 md:px-[7.5rem] content-start md:content-center h-screen`}>
            <ToastContainer/>
            <div
                id={`form-grid`}
                className={`grid grid-cols-1 lg:grid-cols-2 md:gap-x-5 lg:gap-x-[8.125rem] w-full h-auto`}>
                <div
                    id={`formControlForgetPassword`}
                    className={`h-full order-last lg:order-none flex flex-col justify-center items-center w-full gap-y-4 md:gap-y-[10px]`}>
                    <Formik initialValues={initialValues}
                            onSubmit={(values, actions) => {
                                console.log(values)
                                actions.setSubmitting(false)
                                toast.success("Your password has been changed", {
                                    theme: "dark",
                                    autoClose: 1000,
                                    onClose: () => router.push(`/login`)
                                })
                            }}
                            validationSchema={validationSchema}
                    >
                        <Form className={`w-full flex flex-col justify-center`}>
                            <div
                                id={`formTitleAndDesc`}
                                className={`flex flex-col gap-y-2 lg:gap-y-[22px] lg-[20px] mb-2.5`}>
                                <h1 className={`text-[34px] font-semibold`}>New Password</h1>
                            </div>
                            <div id={`formControl`} className={`flex flex-col gap-y-5`}>
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
                                            name={`email`} placeholder={`example@example.com`}
                                            className={`h-[48px] rounded-full px-[20px]`}/>
                                    </div>
                                    <ErrorMessage
                                        name={`email`}
                                        render={msg => <span className={`text-red-700 italic`}>{msg}</span>}
                                    />
                                </div>
                                <div className={`flex flex-col`}>
                                    <div className={`flex flex-col gap-y-[10px]`}>
                                        <label
                                            htmlFor={`oldPassword`}
                                            className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}
                                        >
                                            <HiLockClosed/>
                                            Old Password
                                        </label>
                                        <Field
                                            name={`oldPassword`} placeholder={`########`}
                                            className={`h-[48px] rounded-full px-[20px]`}/>
                                    </div>
                                    <ErrorMessage
                                        name={`oldPassword`}
                                        render={msg => <span className={`text-red-700 italic`}>{msg}</span>}
                                    />
                                </div>
                                <div className={`flex flex-col`}>
                                    <div className={`flex flex-col gap-y-[10px]`}>
                                        <label
                                            htmlFor={`newPassword`}
                                            className={`text-[16px] flex items-center gap-x-[10px] ps-[10px]`}
                                        >
                                            <HiShieldCheck/>
                                            New Password
                                        </label>
                                        <Field
                                            name={`newPassword`} placeholder={`########`}
                                            className={`h-[48px] rounded-full px-[20px]`}/>
                                    </div>
                                    <ErrorMessage
                                        name={`newPassword`}
                                        render={msg => <span className={`text-red-700 italic`}>{msg}</span>}/>
                                </div>
                                <Button
                                    type={`submit`}
                                    className={`text-[17px] w-full h-[45px] bg-primaryColor text-white rounded-full`}
                                >
                                    Change Password
                                </Button>
                            </div>
                        </Form>
                    </Formik>
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
                        <h1 className={`text-[20px] md:text-[36px] text-primaryColor font-semibold`}>Reset your password
                            here!</h1>
                        <span
                            className={`text-primaryColor text-[12px] md:text-[20px]`}>We quickly fix you, Thank you!</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ForgetPasswordFormComponent;