import React, { useState, useEffect } from 'react';

const OrderDetail = ({ match }) => {
    
    const [order, setOrder] = useState(null);

    
    useEffect(() => {
        
        fetch(`/api/orders/${match.params.id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch order details');
                }
            })
            .then(data => {
                setOrder(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [match.params.id]);

    return (
        <div>
            <h2>Order Details</h2>
            {order ? (
                <div>
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Order Date:</strong> {order.order_date}</p>
                    <p><strong>Total Price:</strong> ${order.total_price}</p>
                </div>
            ) : (
                <p>Loading order details...</p>
            )}
        </div>
    );
};

export default OrderDetail;
