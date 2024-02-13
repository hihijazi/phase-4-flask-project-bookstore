from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from config import db, metadata


db = SQLAlchemy()

# Models begin here! 


class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    # Add relationship
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))

    book = db.relationship('Book', back_populates='orders')
    customer = db.relationship('Customer', back_populates='orders')

    # Add serialization rules
    serialize_rules=('-book.orders', '-customer.orders')

    # Add validation 
    @validates('name')
    def validate_name(self, key, value):
        if not value:
            raise ValueError('Must add name!')
        return value
    
    @validates('price')
    def validate_price(self, key, value):
        if not 1 <= value <= 20:
            raise ValueError('Price must be between 1 and 20!')
        return value
    
    def __repr__(self):
        return f'<Class {self.id}: {self.name}>'

