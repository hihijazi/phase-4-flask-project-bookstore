import React, { useState, useEffect } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            {/* Add other book details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;



