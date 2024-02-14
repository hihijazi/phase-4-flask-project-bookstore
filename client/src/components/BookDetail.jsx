import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        // Fetch book details from an external API using the bookId
        fetch(`https://api.example.com/books/${bookId}`)
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
    }, [bookId]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <img src={book.image} alt={book.title} />
            <p>{book.description}</p>
            {/* Add more details about the book here */}
        </div>
    );
};

export default BookDetail;
