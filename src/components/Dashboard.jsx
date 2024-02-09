import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>Welcome to the Bookstore Management System</h2>
            <p>This is the dashboard where you can manage your bookstore.</p>
            <div>
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/books">View All Books</Link></li>
                    <li><Link to="/orders">View Orders</Link></li>
                    <li><Link to="/add-book">Add New Book</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
