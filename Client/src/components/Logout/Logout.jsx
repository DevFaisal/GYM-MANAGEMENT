import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../Store/authSlice'
import { useNavigate } from 'react-router'
import { set } from 'react-hook-form'

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    setTimeout(() => {
        dispatch(authActions.logout())
        navigate('/')
    }, 2000);

    return (
        <div className='text-center flex justify-center items-center h-screen'>
            <div>
                <h1 className='text-2xl font-bold text-white'>You have been logged out</h1>
                <p className='text-gray-500'>Thanks for using Elite Gym WebApp</p>
            </div>
        </div>
    )
}

export default Logout