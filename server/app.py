from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from models import db, Order, Book, Customer
from flask_restful import Api, Resource


from models import db, Order
from flask_migrate import Migrate


app = Flask(__name__)
api = Api(app)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def index():
    return 'Welcome to the Bookstore API!'


from flask import Flask, request, jsonify

app = Flask(__name__)


class Books(Resource):
    def get(self):
        books = [book.to_dict() for book in Book.query.all()]
        return make_response(books, 200)
    
    def post(self):
        data = request.get_json()
        try:
            new_book = Book(
                name = data['name'],
                price = data['price']
            )
            db.session.add(new_book)
            db.session.commit()
            return make_response(new_book.to_dict(rules = ('-orders',)), 201)
        except ValueError:
            return make_response({
                'error':'Validation Error'
            })

api.add_resource(Books, '/books')   

class BooksById(Resource):
    def get(self, id):
        book = Book.query.filter(Book.id == id).first()
        if book:
            return make_response(book.to_dict(), 200)
        else:
            return make_response({
                'error' : 'No Book found'
            }, 404)
        
    def patch(self, id):
        book = Book.query.filter(Book.id == id).first()
        if book:
            try:
                data = request.get_json()
                for attr in data:
                    setattr(book, attr, data[attr])
                    db.session.commit()
                    return make_response(book.to_dict(), 202)
            except ValueError:
                return make_response({
                    'error': 'Validation error'
                }, 404)

    def delete(self, id):
        book = Book.query.filter(Book.id == id).first()
        if book:
            db.session.delete(book)
            db.session.commit()
            return make_response({}, 204)
        return make_response({
            'error': 'No Book found'
        }, 404)

api.add_resource(BooksById, '/books/<int:id>')

class Customers(Resource):
    def get(self):
        customer = [customer.to_dict() for customer in Customer.all]
        return make_response(customer, 200)
    
    def post(get):
        data = data.get_json()
        try:
            new_customer = Customer(
                name = data['name']
            )
            db.session.add(new_customer)
            db.session.commit()
            return make_response(new_customer.to_dict(rules =('-orders',)), 201)
        except ValueError:
            return make_response({
                'error': 'Validation Error'
            })

api.add_resource(Customers, '/customers')


class OrdersById(Resource):
    def get(self, id):
        order = Order.query.filter(Order.id == id).first()
        if order:
            return make_response(order.to_dict(), 200)
        else:
            return make_response({
                'error': 'No Order found'
            }, 404)
        
    def patch(self, id):
        order = Order.query.filter(Order.id == id).first()
        try:
            data = request.get_json()
            for attr in data:
                setattr(order, attr, data[attr])
                db.session.commit()
                return make_response(order.to_dict(), 202)
        except ValueError:
            return make_response({
                'error': 'Validation error'
            },404)
    
    def delete(self, id):
        order = Order.query.filter(Order.id == id).first()
        if order:
            db.session.delete(order)
            db.session.commit()
            return make_response({}, 204)
        return make_response({
            'error': 'No book found'
        }, 404)

api.add_resource(OrdersById, '/orders/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)


    app.run(host='local', port=5555)
