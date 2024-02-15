import React from 'react';
import faker from 'faker';

const Orders = () => {
  const generateOrdersData = () => {
    
    const orders = [];
    for (let i = 0; i < 10; i++) {
      const order = {
        id: faker.datatype.uuid(),
        product: faker.commerce.productName(),
        price: faker.commerce.price(),
        quantity: faker.datatype.number({ min: 1, max: 10 }),
      };
      orders.push(order);
    }
    console.log('Generated Orders:', orders);
 
  };

  return (
    <div>
      <h2>Orders</h2>
      <button onClick={generateOrdersData}>Generate Orders</button>
     
    </div>
  );
};

export default Orders;


