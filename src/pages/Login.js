import React, { useEffect } from 'react';
import Images from '../images';
import * as Yup from "yup";
import { Formik } from 'formik';
import { constants } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginData } from '../Redux/Actions/authActions';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLogin } = useSelector(({ authReducer }) => authReducer);

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

    useEffect(()=>{
        if(isLogin){
            navigate('/home')
        }
    },[isLogin])

    const handleSubmited = (values) => {
        let payload = {
            email: values.email,
            password: values.password
        }
        dispatch(loginData(payload))
    }

    return (
        <div class="flex h-screen flex-row">
            <div class="flex justify-center items-center w-7/12 bg-white rounded-tr-3xl">
                <img src={Images.login} height="450px" width="450px" alt="image" />
            </div>
            <div class="w-5/12 bg-slate-200">
                <Formik
                    initialValues={initialValues}
                    validationSchema={Schema}
                    onSubmit={(values) => {
                        console.log("values---->>>", values)
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

                        <div className="max-w-md mx-auto my-20 p-5 rounded-md">
                            <h1 className="text-2xl font-bold mb-8">Marketing Collatarel Database</h1>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-8">
                                    <div className="flex flex-row items-center rounded-full bg-white border border-gray-400">
                                        {/* <label className="block text-gray-700 font-semibold mb-2">Email</label> */}
                                        <span class="material-symbols-outlined ml-4 text-3xl text-gray-400">person</span>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder='Enter email'
                                            className=" p-5 text-lg w-full rounded-full focus:outline-none"
                                            onChange={(e) => { setFieldValue("email", e.target.value); }}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            required
                                        />
                                    </div>
                                    {touched.email && (
                                        <div style={{ color: "red" }}>{errors.email}</div>
                                    )}
                                </div>
                                <div class="mb-8">
                                    <div className="flex flex-row items-center rounded-full bg-white border border-gray-400">
                                        <span class="material-symbols-outlined ml-4 text-3xl text-gray-400">lock</span>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder='Enter password'
                                            className=" p-5 text-lg w-full rounded-full focus:outline-none"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            required />
                                    </div>
                                    {touched.password && (
                                        <div style={{ color: "red" }}>{errors.password}</div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white font-semibold w-full h-16 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default Login;

