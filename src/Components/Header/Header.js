import React from 'react';
import { Link } from 'react-router-dom';
import ('./Header.css')

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/grandPa'>GrandPa</Link>
            <Link to='/about'>About Us</Link>
        </nav>
    );
};

export default Header;