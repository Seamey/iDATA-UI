"use client";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Image from 'next/image';
import { useState } from 'react';
import { EditprofileType } from '@/lib/definitions';

const FILE_SIZE = 1024 * 1024 * 5; 
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const initialValues: EditprofileType = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    position: "",
    image: "",
};

const validationSchema = Yup.object({
    firstName: Yup.string().required('* First name is required'),
    lastName: Yup.string().required('* Last name is required'),
    userName: Yup.string().required("* Username is required"),
    email: Yup.string().email("* Invalid email").required("* Email is required"),
    position: Yup.string().required("* Position is required"),
}).shape({
    image: Yup.mixed()
        .test("fileSize", "File too large", (value:any) => {
            if (!value) return true;
            return value.size <= FILE_SIZE;
        })
        .test("fileFormat", "Unsupported Format", (value:any) => {
            if (!value) return true;
            return SUPPORTED_FORMATS.includes(value.type);
        })
        .required("Required"),
});

const fieldStyle = "border border-gray-300 rounded-full";

const EditFormComponent = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const handleSubmitToServer = async (values:any) => {
        const formData = new FormData();
        formData.append('image', values.image);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.image;
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleCreateProduct = async (values:any, imageData:any) => {
        try {
            const imageUrl = await handleSubmitToServer(imageData);
            console.log("data: ", values);
            const postData = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({
                    ...values,
                    image: imageUrl,
                }),
            });
            console.log("post data: ", postData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full pt-9">
            <Formik
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    const formData = new FormData();
                    formData.append("image", values.image);
                    handleCreateProduct(values, { image: formData });
                    setSubmitting(false);
                    resetForm();
                }}
                validationSchema={validationSchema}
                initialValues={initialValues}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form className="flex flex-col lg:flex-row gap-x-5 gap-y-5 py-5 px-[20px] lg:px-[60px]">
                        <div className='w-32 h-32 rounded-full overflow-hidden mb-2'>
                            <div className='bg-yellow-300'>
                                <Field
                                    name="image"
                                    className="w-full h-full object-cover bg-blue-300"
                                    type="file"

                                    setFieldValue={setFieldValue} 
                                    component={CustomInput} 
                                />
                                <ErrorMessage name="image">
                                    {(msg) => <div className="text-danger">{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div className='grid'>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstName">First Name </label>
                                <Field
                                    placeholder="Sok"
                                    className={fieldStyle}
                                    name="firstName"
                                    type="text"
                                />
                                <ErrorMessage name="firstName">
                                    {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastName">Last Name </label>
                                <Field
                                    placeholder="Cheat"
                                    className={fieldStyle}
                                    name="lastName"
                                    type="text"
                                />
                                <ErrorMessage name="lastName">
                                    {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <Field
                                    placeholder="sokcheat@gmail.com"
                                    className={fieldStyle}
                                    name="email"
                                    type="email"
                                />
                                <ErrorMessage name="email">
                                    {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="position">Position </label>
                                <Field
                                    placeholder="Back-end developer"
                                    className={fieldStyle}
                                    name="position"
                                    type="text"
                                />
                                <ErrorMessage name="position">
                                    {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
                                </ErrorMessage>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 bg-green-600 text-white rounded-md"
                                    disabled={isSubmitting}
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditFormComponent;

function CustomInput({ field, form, setFieldValue, ...props }:any) {
    const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
    const name = field.name;
    const onChange: any = (event: any) => {
        console.log("event:", event.currentTarget.files);
        const file = event.currentTarget.files[0];
        setFieldValue(name, file);
        setPreviewImage(URL.createObjectURL(file));
    };

    return (
        <div className="flex flex-col gap-4 justify-center">
            <input
                type="file"
                onChange={onChange}
                {...props}
                className="border border-gray-300 rounded-xl w-32 h-32 hidden"
            />
            {previewImage && (
                <Image
                    className="rounded-full"
                    src={previewImage}
                    alt="preview Image"
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%" }}
                />
            )}
        </div>
    );
}
