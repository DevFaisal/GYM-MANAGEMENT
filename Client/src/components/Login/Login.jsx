import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal(".reveal-me", config);
    }, []);
    const config = {
        origin: "left",
        duration: 1000,
        delay: 200,
        distance: "100px",
        scale: 1,
        easing: "ease",
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState({})
    const login = async (data) => {
        await axios.post(`${import.meta.env.VITE_SERVER_URL}user/login`, data)
            .then(res => {
                if (res.status === 200) {
                    navigate('/dashboard')
                    dispatch(authActions.login())
                    localStorage.setItem('token', res.data.token)
                }
            })
            .catch(err => {
                setError({ message: err.response.data.message })
            })
    }


    return (
        <>
            <div className='flex justify-start items-center h-screen'>
                <div className='ml-20 bg-gray-300 w-96 reveal-me'>
                    <div className='w-full p-2 text-center text-3xl bg-lime-600 text-white'>
                        <h1>Login</h1>
                    </div>
                    <form className='flex flex-col p-4 gap-4 text-sm' onSubmit={handleSubmit(login)}>
                        <select className='py-2 font-semibold  outline-none px-3' {...register("role")}>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>

                        <div className='flex flex-col'>
                            <label className='font-semibold'>Email</label>
                            <input type='email' className='py-2 outline-none px-3'  {...register("email", { required: "Email is required" })} />

                        </div>

                        <div className='flex flex-col'>
                            <label className='font-semibold'>Password</label>
                            <input type='password' className='py-2  outline-none px-3' {...register("password", { required: "Password is required" })} />

                        </div>

                        <input className='bg-black hover:bg-gray-900 p-2  text-white' type="submit" />

                        <div className='flex justify-around text-sm'>
                            <p>Already an User</p>
                            <p className='text-red-700'>Forget Password?</p>
                        </div>
                    </form>
                    <div className='flex flex-col w-full mt-2 bg-red-800'>
                        <span className='text-white text-sm text-center italic'>{error.message}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login