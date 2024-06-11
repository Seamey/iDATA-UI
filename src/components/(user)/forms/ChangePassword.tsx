'use client'

import React from 'react';
import { ChangePasswordType } from '@/lib/definitions';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Button} from "flowbite-react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ChangePasswordFormComponent() {

    const labelStyle: string = `font-medium text-primaryColor`;
    const fieldControl: string = `flex flex-col gap-y-2 justify-start`;
    const fieldStyle: string = `w-[400px] lg:w-[500px] h-[46px] border-[1px] border-gray-300 rounded-full ps-[20px]`;
    const errorMessageStyle: string = `text-red-700 text-[12px] italic`;

    const initialValues: ChangePasswordType = {
        oldPassword: "",
        newPassword: "", 
        confirmNewPassword: "",
    }

    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('* Old Password is required'),
        newPassword: Yup.string().required('* New Password is required'),
        confirmNewPassword: Yup.string()
            .required('* Confirm Password is required')
            .oneOf([Yup.ref(`newPassword`)], `Confirm Password must be match`),
    })

    return (
        <div
            id={`change-password-form`}
        >
            <ToastContainer/>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => (
                    console.log(values)
                )}>
                <Form
                    className={`md:w-[500px] flex flex-col items-center gap-y-[15px] mx-auto  rounded-[20px] py-[20px] md:py-[50px]`}
                >
                    <div className={fieldControl}>
                        <label
                            htmlFor="oldPassword"
                            className={labelStyle}>
                            Old Password
                        </label>
                        <Field
                            name="oldPassword"
                            id="oldPassword"
                            type="password"
                            placeholder="########"
                            className={fieldStyle}
                        />
                        <ErrorMessage
                            id="oldPassword"
                            name="oldPassword"
                            render={msg => <span className={errorMessageStyle}>{msg}</span>}
                        />
                    </div>
                    <div className={fieldControl}>
                        <label
                            htmlFor="newPassword"
                            className={labelStyle}>
                            New Password
                        </label>
                        <Field
                            name="newPassword"
                            id="newPassword"
                            type="password"
                            placeholder="########"
                            className={fieldStyle}
                        />
                        <ErrorMessage
                            id={`newPassword`}
                            name={`newPassword`}
                            render={msg => <span className={errorMessageStyle}>{msg}</span>}
                        />
                    </div>
                    <div className={fieldControl}>
                        <label
                            htmlFor="confirmNewPassword"
                            className={labelStyle}>
                            Confirm Password
                        </label>
                        <Field
                            name="confirmNewPassword"
                            id="confirmNewPassword"
                            type="password"
                            placeholder="########"
                            className={fieldStyle}
                        />
                        <ErrorMessage
                            id={`confirmNewPassword`}
                            name={`confirmNewPassword`}
                            render={msg => <span className={errorMessageStyle}>{msg}</span>}
                        />
                    </div>
                    <p className={`text-[12px] px-5 md:px-[80px] lg:px-[50px] text-gray-400 font-normal`}>
                        Make sure it is at least 15 characters OR at least 8 characters
                        including a number and a lowercase letter
                    </p>
                    <div className={`flex justify-center`}>
                        <Button
                            pill
                            color={`blue`}
                            className={`bg-primaryBlue`}
                            type={`submit`}
                            onClick={() => toast.success(
                                'Password has been updated',
                                {
                                    autoClose: 1000
                                })}
                        >
                            Update Password
                        </Button>
                    </div>
                </Form>
            </Formik>

        </div>
    );
}

export default ChangePasswordFormComponent;
