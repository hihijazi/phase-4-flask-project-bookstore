import React from 'react';
import { generateOrders } from '../utils/faker'; // Function to generate mock order data
import OrderList from './OrderList';

const Orders = () => {
    const orders = generateOrders(10); // Generate 10 mock orders
    return (
        <div>
            <h2>Orders</h2>
            <OrderList orders={orders} />
        </div>
    );
};

export default Orders;

