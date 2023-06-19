import React,{useEffect,useState} from 'react'
import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';

const SignupSchema= Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});


 


const submit = () => {
    
    alert("Form submitted successfully")
}

export const Register = () => (
   

            <>
    <div>
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
            <a href="/">
                <h3 className="text-4xl font-bold text-purple-600">
                    Logo
                </h3>
            </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    submit();
                    console.log(values);
                }}
            >
                   {({ errors, touched }) => (
            <form>
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Name
                    </label>
                    <div className="flex flex-col items-start">
                    <Field name="name" 
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                    {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null}

                

                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Email
                    </label>
                    <div className="flex flex-col items-start">
                       <Field name="email"
                        type="email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                    ) : null}

                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Password
                    </label>
                    <div className="flex flex-col items-start">
                        <Field name="password"
                        type="password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                    ) : null}
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Confirm Password
                    </label>
                    <div className="flex flex-col items-start">
                        <Field name="password_confirmation"
                        type="password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        {errors.password_confirmation && touched.password_confirmation ? (
                        <div>{errors.password_confirmation}</div>
                    ) : null}

                    </div>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <a
                        className="text-sm text-gray-600 underline hover:text-gray-900"
                        
                    >
                        Already registered?
                    </a>
                    <button
                                            
                        type="submit"
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    >
                        Register
                    </button>
                </div>
            </form>
            )}
            
            </Formik>
        </div>
    </div>
</div>
            </>
);





export default Register;