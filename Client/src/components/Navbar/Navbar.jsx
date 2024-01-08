import React from 'react'
import { Dumbbell } from 'lucide-react'

function Navbar() {
    const navItems = [{
        name: 'Home',
        link: '/'
    }, {
        name: 'About',
        link: '/about'
    }, {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Login',
        link: '/login'
    },
    {
        name: 'Register',
        link: '/register'
    }]
    return (
        <>
            <nav className='flex justify-between items-center bg-black p-3 text-white'>
                <div className='flex items-center gap-1'>
                    <Dumbbell color='lime' />
                    <h1 className='text-2xl font-bold'>Elite Gym</h1>
                </div>
                <div>
                    <ul className='flex justify-between gap-3 text-gray-200'>
                        {navItems.map((item, index) => {
                            if (item.name === 'Login' || item.name === 'Register') {
                                return <button className='text-black outline-none bg-lime-400 px-2 py-1 hover:bg-lime-500' key={index} onClick={(e) => (item.link)}><li>{item.name}</li></button>
                            }
                            else {
                                return <button key={index} onClick={(e) => (item.link)}><li>{item.name}</li></button>
                            }
                        })}
                    </ul>
                </div>
            </nav >
        </>
    )
}

export default Navbar