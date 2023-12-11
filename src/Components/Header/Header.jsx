import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/review">Order-review</Link>
            <Link to="/grandpa">Grandpa</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        </div>
    );
};

export default Header;