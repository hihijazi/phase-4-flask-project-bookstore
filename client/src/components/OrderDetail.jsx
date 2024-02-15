import React, { useState, useEffect } from 'react';

const OrderDetail = ({ match }) => {
    
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/orders/${match.params.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch order details');
                }
                return response.json();
            })
            .then(data => {
                setOrder(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [match.params.id]);

    if (loading) {
        return <p>Loading order details...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Order Details</h2>
            {order && (
                <div>
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Order Date:</strong> {order.order_date}</p>
                    <p><strong>Total Price:</strong> ${order.total_price}</p>
                </div>
            )}
        </div>
    );
};

export default OrderDetail;

