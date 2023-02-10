import React from 'react'
import { Outlet } from 'react-router-dom'

import HeaderNav from '../components/navs/HeaderNav'

function MainLayout() {
    return (
        <div>
            <HeaderNav />
            <main className='container'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout