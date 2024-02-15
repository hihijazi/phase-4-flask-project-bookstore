import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar'; 
import Home from './components/Home';
import Books from './components/Books';
import Orders from './components/Orders';
import AddBook from './components/AddBook';



function App() {
    return (
        <>
            <div>
                <Navbar /> 
                <Header />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/addbook" element={<AddBook />} />
                </Routes>
            </div>
        </>
    );
};

export default App;