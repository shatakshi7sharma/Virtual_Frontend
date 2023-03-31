import React from 'react';
import * as Yup from "yup";
import { Formik } from 'formik';
import { constants } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginData } from '../Redux/Actions/authActions';

export default function LoginTemp() {
    const dispatch = useDispatch();

    const initialValues = {
         email: '',
         password: '' 
    }

    const Schema = Yup.object().shape({
        email: Yup.string()
          .email(constants?.validations?.invalidEmail)
          .required(constants?.validations?.requiredEmail),
        password: Yup.string().required(constants?.validations?.requiredPassword),
    });

    const handleSubmited =(values)=>{
        let payload = {
            email:values.email,
            password:values.password
        }
        dispatch(loginData(payload))
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Schema}
                onSubmit={(values) => {
                    console.log("values---->>>",values)
                handleSubmited(values);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                /* and other goodies */
            }) => (

                <div className="max-w-md mx-auto my-20 bg-white p-5 rounded-md shadow-md">
                    <h1 className="text-2xl font-semibold mb-5 text-center">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            onChange={(e)=>{setFieldValue("email", e.target.value);}}
                            onBlur={handleBlur}
                            value={values.email}
                            required />
                            {touched.email && (
                              <div style={{ color: "red" }}>{errors.email}</div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label 
                            className="block text-gray-700 font-semibold mb-2"
                            >Password
                            </label>
                            <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            required />
                            {touched.password && (
                              <div style={{ color: "red" }}>{errors.password}</div>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button 
                            type="submit" 
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >Login
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </Formik>
    )
}
