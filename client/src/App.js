import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Books from './components/Books';
import BookDetail from './components/BookDetail';
import OrderDetail from './components/OrderDetail';
import AddBook from './components/AddBook'; 

function App() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [books, setBooks] = useState([]); 
  const [customers, setCustomers] = useState([]);

  const onLogin = (user) => {
    setUser(user);
  };

  const onLogOut = () => {
    setUser(null);
  };

  useEffect(() => {
    fetch('/check_session')
      .then((r) => {
        if (!r.ok) {
          throw new Error('Session check failed');
        }
        return r.json();
      })
      .then((user) => setUser(user))
      .catch(() => setUser(null));
  }, []);

  function updateOrders(updatedOrder) {
    const updatedOrders = orders.map((order) => 
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
  }

  function updateBooks(updatedBook) { 
    const updatedBooksList = books.map((book) => 
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooksList); 
  }

  function updateCustomers(updatedCustomer) {
    const updatedCustomersList = customers.map((customer) => 
        customer.id === updatedCustomer.id ? updatedCustomer : customer
    );
    setCustomers(updatedCustomersList);
  }

  return (
    <>
      <Header />
      <Router>
        <Route path="/" element={<Home user={user} onLogin={onLogin} onLogOut={onLogOut} />} />
        <Route path="/orders" element={<Orders orders={orders} onUpdateOrder={updateOrders} user={user} />} />
        <Route path="/books" element={<Books user={user} onUpdateBook={updateBooks} />} /> 
        <Route path="/customers" element={<Customers user={user} onUpdateCustomer={updateCustomers} />} />
        <Route path="/books/:id" element={<BookDetail user={user} />} />
        <Route path="/orders/:id" element={<OrderDetail onUpdateOrder={updateOrders} />} />
        <Route path="/add-book" element={<AddBook onUpdateBook={updateBooks} />} />
        <Footer />
      </Router>
    </>
  );
}

export default App;