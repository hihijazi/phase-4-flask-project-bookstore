import React from 'react';
import { Link } from 'react-router-dom';
import logoGif from '../assets/logo.gif'; // Adjusted import path

const Header = () => {
    return (
        <header>
            <img src={logoGif} alt="Logo" />
            <div>
                <h1>Welcome to Blast Bookstore </h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/add-book">Add Book</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;




