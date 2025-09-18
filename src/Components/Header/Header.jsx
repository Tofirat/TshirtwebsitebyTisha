import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaTshirt } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="brand">
                    <FaTshirt className="brand-icon" />
                    <h1>Sakin Styles</h1>
                </div>
                <nav className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;