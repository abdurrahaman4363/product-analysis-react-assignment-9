import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
        
                <Link className='link' to="/">HOME</Link>
                <Link className='link' to="/reviews">REVIEWS</Link>
                <Link className='link' to="/deshboard">DASHBOARD</Link>
                <Link className='link' to="/blogs">BLOGS</Link>
                <Link className='link' to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;