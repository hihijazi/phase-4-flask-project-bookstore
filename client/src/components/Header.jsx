import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Your App Name</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          <Nav.Link as={Link} to="/books">Books</Nav.Link>
          <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
          <Nav.Link as={Link} to="/add-book">Add Book</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
