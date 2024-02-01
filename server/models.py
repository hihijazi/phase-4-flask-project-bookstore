from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from faker import Faker

db = SQLAlchemy()
fake = Faker()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    orders = relationship('Order', backref='user', lazy=True)

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    orders = relationship('Order', secondary='order_book', backref='books')

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_date = db.Column(db.DateTime, nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

class OrderBook(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=True)

# Function to populate the database with fake data
def populate_fake_data():
    for _ in range(10):  # Create 10 fake users
        username = fake.user_name()
        email = fake.email()
        password = fake.password()
        user = User(username=username, email=email, password=password)
        db.session.add(user)

    for _ in range(20):  # Create 20 fake books
        title = fake.sentence(nb_words=3)
        author = fake.name()
        genre = fake.word()
        price = fake.random_number(digits=2)
        book = Book(title=title, author=author, genre=genre, price=price)
        db.session.add(book)

    db.session.commit()

