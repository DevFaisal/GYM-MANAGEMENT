import React from 'react'
import { useForm } from "react-hook-form";


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const error = errors.Email?.message || errors.Password?.message;
    console.log();

    return (
        <>
            <div className='flex justify-start items-center h-screen'>
                <div className='ml-20 bg-gray-300 w-96'>
                    <div className='w-full p-2 text-center text-3xl bg-lime-600 text-white'>
                        <h1>Login</h1>
                    </div>
                    <form className='flex flex-col p-4 gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <select className='py-2 font-semibold rounded-md outline-none px-3' {...register("gender")}>
                            <option value="female">Customer</option>
                            <option value="male">Admin</option>
                        </select>

                        <div className='flex flex-col'>
                            <label className='font-semibold'>Email</label>
                            <input type='email' className='py-2 rounded-md outline-none px-3'  {...register("Email", { required: "Email is required" })} />

                        </div>

                        <div className='flex flex-col'>
                            <label className='font-semibold'>Password</label>
                            <input type='password' className='py-2 rounded-md outline-none px-3' {...register("Password", { required: "Password is required" })} />

                        </div>

                        <input className='bg-black hover:bg-gray-900 p-2  text-white' type="submit" />

                        <div className='flex justify-around text-sm'>
                            <p>Already an User</p>
                            <p className='text-red-700'>Forget Password?</p>
                        </div>
                    </form>
                    <div className='flex flex-col w-full'>
                        <span className='text-red-600 text-sm text-center italic'>{error}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login