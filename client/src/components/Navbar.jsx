import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontweight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
        };
    }

    return (
        <nav>
            <NavLink style={navLinkStyles} to="/Home">Home</NavLink>
            <NavLink style={navLinkStyles} to="/books">Books</NavLink>
            <NavLink style={navLinkStyles} to="/orders">Orders</NavLink>
            <NavLink style={navLinkStyles} to="/addbook">Add Book</NavLink>
        </nav>
    );
};

export default Navbar;

