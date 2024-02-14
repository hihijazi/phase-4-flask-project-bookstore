import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker'; // Import Faker.js

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

    const suggestedBooks = Array.from({ length: 5 }, () => ({
        title: faker.lorem.words(3),
        author: faker.name.findName(),
        id: faker.datatype.uuid(),
    }));

    const allBooks = [...books, ...suggestedBooks];

    return (
        <div>
            <h2>Suggested Book List</h2>
            <div>
                {allBooks.map(book => (
                    <div key={book.id} style={{ marginLeft: '10px', marginBottom: '10px' }}>
                        <Link to={`/books/${book.id}`}>
                            {book.title} by {book.author}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;


