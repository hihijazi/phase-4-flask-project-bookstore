import React from 'react';
import { generateBooks } from '../utils/faker'; // Function to generate mock book data
import BookList from './BookList';

const Books = () => {
    const books = generateBooks(10); // Generate 10 mock books
    return (
        <div>
            <h2>Books</h2>
            <BookList books={books} />
        </div>
    );
};

export default Books;

