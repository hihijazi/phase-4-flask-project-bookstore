import React from 'react';

const Customers = ({ customers }) => {
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <div>Name: {customer.name}</div>
            <div>Email: {customer.email}</div>
            {/* Add other customer details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
