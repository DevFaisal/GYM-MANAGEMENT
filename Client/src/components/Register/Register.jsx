import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/authSlice';


function Register() {

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState({});
    const onSubmit = async data => {
        if (data.password.length < 8) {
            return setError({ message: 'Password must be atleast 8 characters long' })
        }

        if (data.password !== data.confirmPassword) {
            return setError({ message: 'Passwords do not match' })
        }

        await axios.post(`${import.meta.env.VITE_SERVER_URL}user/register`, data)
            .then(res => {
                if (res.status === 200) {
                    dispatch(authActions.login())
                    navigate('/dashboard')
                }
            })
            .catch(err => {
                setError({ message: err.response.data.message })
            })
    };

    return (
        <>
            <div className='flex justify-start items-center h-screen'>
                <div className='reveal-me ml-20 bg-gray-300 w-96'>
                    <div className='w-full p-2 text-center text-3xl bg-lime-600 text-white'>
                        <h1>Register</h1>
                    </div>
                    <form className='flex flex-col p-4 gap-2 text-sm' onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex flex-col'>
                            <label className='font-semibold'>Name</label>
                            <input type='text' className='py-2 outline-none px-3'  {...register("name", { required: "Name is required" })} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold'>Parentage</label>
                            <input type='text' className='py-2 outline-none px-3'  {...register("parentage", { required: "Parentage is required" })} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold'>Address</label>
                            <input type='text' className='py-2 outline-none px-3'  {...register("address", { required: "Address is required" })} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold'>Phone</label>
                            <input type='text' className='py-2 outline-none px-3'  {...register("phone", { required: "Phone Number is required" })} />
                        </div>

                        <div className='flex flex-col'>
                            <label className='font-semibold'>Email</label>
                            <input type='email' className='py-2 outline-none px-3'  {...register("email", { required: "Email is required" })} />
                        </div>

                        <div className='flex flex-col'>
                            <label className='font-semibold'>Password</label>
                            <input type='password' className='py-2 outline-none px-3' {...register("password", { required: "Password is required" })} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold'>Confirm Password</label>
                            <input type='password' className='py-2 outline-none px-3' {...register("confirmPassword", { required: "Confirm Password is required" })} />
                        </div>

                        <input className='bg-black hover:bg-gray-900 p-2 text-white' type="submit" />

                        <div className='flex justify-around text-sm'>
                            <p>Already an User?</p>
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

export default Register