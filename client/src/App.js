// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';
import Books from './components/Books';
import Customer from './components/Customer';
import Orders from './components/Orders';
import BookDetail from './components/BookDetail';
import OrderDetail from './components/OrderDetail';




function App() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [books, setBooks] = useState([]); 
  const [customers, setCustomers] = useState([]);
  
  function updateBooks(updatedBook) {
    const updatedBooks = books.map((cls) => 
      cls.id === updatedBook.id ? updatedBook : cls
    );
    setBooks(updatedBooks);
  }

  function updateOrders(updatedOrder) { 
    const updatedOrderList = orders.map((order) => 
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrdersList); 
  }

  function updateCustomers(updatedCustomer) {
    const updatedCustomerList = customers.map((customer) => 
        customer.id === updatedCustomer.id ? updatedCustomer : customer
    );
    setCustomers(updatedCustomersList);
  }
  return (
    <div>
      <Header />
      <Route path="/books" element={<Books books={books} onUpdateBook={updateBooks} user={user} />} />
      
      <main>
        <BookList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
