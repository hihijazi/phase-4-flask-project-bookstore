import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      title: title,
      author: author,
      genre: genre,
      price: price
    };

    fetch('/api/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(response => {
        if (response.ok) {
          console.log('Book added successfully');
          setTitle('');
          setAuthor('');
          setGenre('');
          setPrice('');
        } else {
          console.error('Error adding book');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    </div>
  );
};

export default AddBook;
