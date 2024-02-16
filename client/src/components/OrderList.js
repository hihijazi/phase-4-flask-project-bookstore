import React from 'react';

const OrderList = ({ orders, customers }) => {
    return (
        <div>
            {orders.map(order => (
                <div key={order.id}>
                    <p>Order ID: {order.id}</p>
                    <p>Customer: {customers.find(customer => customer.id === order.customer_id)?.name}</p>
                    <p>Total Price: ${order.total_price}</p>
                    <p>Book: {order.book_id}</p> {/* You can modify this to display book details */}
                </div>
            ))}
        </div>
    );
};

export default OrderList;

