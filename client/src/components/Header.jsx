import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                <h1>Bookstore Management System</h1>
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
