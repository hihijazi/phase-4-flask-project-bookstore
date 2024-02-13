#!/usr/bin/env python3

# Standard library imports
from random import randint

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Customer, Book, Order

fake = Faker()

def create_customers():
    customers = []
    for _ in range(10):
        customer = Customer(
            name=fake.name(),
            email=fake.email()
        )
        customers.append(customer)
    return customers

def create_books():
    books = []
    for _ in range(20):
        book = Book(
            title=fake.catch_phrase(),
            author=fake.name(),
            price=randint(10, 50)
        )
        books.append(book)
    return books

def create_orders(customers, books):
    orders = []
    for _ in range(30):
        order = Order(
            customer_id=randint(1, len(customers)),
            book_id=randint(1, len(books)),
            quantity=randint(1, 5)
        )
        orders.append(order)
    return orders

if __name__ == '__main__':
    with app.app_context():
        print("Clearing db...")
        Customer.query.delete()
        Book.query.delete()
        Order.query.delete()

        print("Seeding customers...")
        customers = create_customers()
        db.session.add_all(customers)
        db.session.commit()

        print("Seeding books...")
        books = create_books()
        db.session.add_all(books)
        db.session.commit()

        print("Seeding orders...")
        orders = create_orders(customers, books)
        db.session.add_all(orders)
        db.session.commit()

        print("Done seeding!")

