import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {

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

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>
                            {book.title} by {book.author}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
