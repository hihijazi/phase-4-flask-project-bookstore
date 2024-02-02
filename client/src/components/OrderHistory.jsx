import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
    
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        
        fetch(`/api/users/${user_id}/orders`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch orders');
                }
            })
            .then(data => {
                setOrders(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <Link to={`/orders/${order.id}`}>
                            Order ID: {order.id}, Order Date: {order.order_date}, Total Price: ${order.total_price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
