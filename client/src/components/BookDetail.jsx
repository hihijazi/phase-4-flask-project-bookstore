import React, { useState, useEffect } from 'react';

const BookDetail = ({ match }) => {

    const [book, setBook] = useState(null);

    useEffect(() => {
        
        fetch(`/api/books/${match.params.id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch book details');
                }
            })
            .then(data => {
                setBook(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [match.params.id]);

    return (
        <div>
            <h2>Book Details</h2>
            {book ? (
                <div>
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Price:</strong> ${book.price}</p>
                </div>
            ) : (
                <p>Loading book details...</p>
            )}
        </div>
    );
};

export default BookDetail;
