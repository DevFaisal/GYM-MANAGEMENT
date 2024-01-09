import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './src/components/Navbar/Navbar';

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout