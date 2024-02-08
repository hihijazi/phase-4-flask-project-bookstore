import React, { useState, useEffect } from 'react';

const OrderForm = () => {
    
    const [orderDate, setOrderDate] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [userId, setUserId] = useState('');
    const [books, setBooks] = useState([]);

    
    useEffect(() => {
 
        fetch('/api/books/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch books');
                }
            })
            .then(data => {
                setBooks(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newOrder = {
            order_date: orderDate,
            total_price: totalPrice,
            user_id: userId
            
        };

        fetch('/api/orders/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(response => {
            if (response.ok) {
                
                console.log('Order added successfully');
            } else {
                
                console.error('Error adding order');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h2>Add New Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Order Date:</label>
                    <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} required />
                </div>
                <div>
                    <label>Total Price:</label>
                    <input type="number" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} required />
                </div>
                <div>
                    <label>User ID:</label>
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                </div>
                {/* */}
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
};

exp
