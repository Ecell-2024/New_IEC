import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarDefault from "../components/Navba/Nav";
import Foot from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavbarDefault />
            <Outlet />
            <Foot />
        </div>
    )
}

export default MainLayout
