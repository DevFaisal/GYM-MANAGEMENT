import React from 'react'
import { Dumbbell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar() {

    const { isAuthenticated } = useSelector(state => state.auth)
    const { isAdmin } = useSelector(state => state.auth)
    const navItems = [{
        name: 'Home',
        link: '/',
        isAuth: isAuthenticated
    },
    {
        name: 'Login',
        link: '/login',
        isAuth: isAuthenticated
    },
    {
        name: 'Register',
        link: '/register',
        isAuth: isAuthenticated
    },
    {
        name: 'Profile',
        link: '/profile',
        isAuth: isAuthenticated
    },
    {
        name: 'Dashboard',
        link: '/dashboard',
        isAuth: isAuthenticated && isAdmin
    },
    {
        name: 'Logout',
        link: '/logout',
        isAuth: isAuthenticated
    },
    {
        name: 'Packages',
        link: '/packages',
        isAuth: isAuthenticated
    },

    ]
    return (
        <>
            <nav className='flex justify-between items-center bg-black p-3 text-white'>
                <div >
                    <Link className='flex items-center gap-1' to={'/'}>  <Dumbbell color='lime' /><h1 className='text-2xl font-bold'>Elite Gym</h1></Link>
                </div>
                <div>
                    <ul className='flex justify-between gap-3 text-gray-200'>
                        {navItems.map((item, index) => {
                            if (item.name === 'Login' || item.name === 'Register') {
                                return null
                            }
                            else if (item.isAuth && item.name != "Logout") {
                                return <Link to={item.link}><button className='text-gray-300 hover:text-gray-100 duration-200' key={index} onClick={(e) => (item.link)}><li>{item.name}</li></button></Link>
                            }
                        })}
                    </ul>
                </div>
                <div>
                    <ul className='flex justify-between gap-3 text-gray-200'>
                        {navItems.map((item, index) => {
                            if ((item.name === 'Login' || item.name === 'Register') && !item.isAuth) {
                                return <Link to={item.link} key={index}> <button className='text-black outline-none hover:ring-2 ring-white bg-lime-400 px-2 py-1 hover:duration-300' onClick={(e) => (item.link)}><li>{item.name}</li></button></Link>
                            }
                            else if ((item.name === 'Logout') && item.isAuth) {
                                return <Link to={item.link} key={index}> <button className='text-black outline-none hover:ring-2 ring-white bg-lime-400 px-2 py-1 hover:duration-300' onClick={(e) => (item.link)}><li>{item.name}</li></button></Link>
                            }

                        })}
                    </ul>
                </div>
            </nav >
        </>
    )
}

export default Navbar