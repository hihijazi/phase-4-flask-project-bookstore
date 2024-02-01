from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, User, Book, Order, OrderBook, populate_fake_data

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bookstore.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()
    populate_fake_data()  


@app.route('/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    books_data = [{
        'id': book.id,
        'title': book.title,
        'author': book.author,
        'genre': book.genre,
        'price': book.price
    } for book in books]
    return jsonify(books_data)

@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = Book.query.get_or_404(book_id)
    book_data = {
        'id': book.id,
        'title': book.title,
        'author': book.author,
        'genre': book.genre,
        'price': book.price
    }
    return jsonify(book_data)

@app.route('/books', methods=['POST'])
def create_book():
    data = request.json
    new_book = Book(title=data['title'], author=data['author'], genre=data['genre'], price=data['price'])
    db.session.add(new_book)
    db.session.commit()
    return jsonify({'message': 'Book created successfully!'})

@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    book = Book.query.get_or_404(book_id)
    data = request.json
    book.title = data['title']
    book.author = data['author']
    book.genre = data['genre']
    book.price = data['price']
    db.session.commit()
    return jsonify({'message': 'Book updated successfully!'})

@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    book = Book.query.get_or_404(book_id)
    db.session.delete(book)
    db.session.commit()
    return jsonify({'message': 'Book deleted successfully!'})

if __name__ == '__main__':
    app.run(debug=True)

