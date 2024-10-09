import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './styles/MainNavbar.css'

const MainNavbar = () => {
    return (
        <div className='main-navbar--router__link '>
            <Link to={'/planned-books'}>Planned Books</Link>
            <Link to={'/add-book-form'}>Add book</Link>
            <Outlet />
        </div>
    )
}

export default MainNavbar
