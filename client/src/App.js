// App.js

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';

function App() {
  return (
    <div>
      <Header />
      <main>
        <BookList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
