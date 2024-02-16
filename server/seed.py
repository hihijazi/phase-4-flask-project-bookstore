#!/usr/bin/env python3
import requests
from app import app, db
from models import Book, Order, Customer

# Define the base URL for the Flask backend API
BASE_URL = "http://127.0.0.1:5555"

with app.app_context():
    # This will delete any existing rows
    # so you can run the seed file multiple times without having duplicate entries in your database
    print("Deleting data...")
    Book.query.delete()
    Order.query.delete()
    Customer.query.delete()

    # Fetch customers from the Flask backend API
    print("Fetching customers...")
    response = requests.get(f"{BASE_URL}/customers")
    if response.status_code == 200:
        customers_data = response.json()
        customers = [Customer(name=customer_data['name']) for customer_data in customers_data]
    else:
        print(f"Failed to fetch customers: {response.status_code}")
        customers = []

    # Fetch orders from the Flask backend API
    print("Fetching orders...")
    response = requests.get(f"{BASE_URL}/orders")
    if response.status_code == 200:
        orders_data = response.json()
        orders = [Order(total_price=order_data['total_price'], customer_id=order_data['customer_id']) for order_data in orders_data]
    else:
        print(f"Failed to fetch orders: {response.status_code}")
        orders = []

    # Fetch books from the Flask backend API
    print("Fetching books...")
    response = requests.get(f"{BASE_URL}/books")
    if response.status_code == 200:
        books_data = response.json()
        books = [Book(title=book_data['title'], author=book_data['author'], price=book_data['price']) for book_data in books_data]
    else:
        print(f"Failed to fetch books: {response.status_code}")
        books = []

    # Adding objects to the session
    db.session.add_all(customers)
    db.session.add_all(orders)
    db.session.add_all(books)
    
    # Committing the session to the database
    db.session.commit()

    print("Seeding done!")
