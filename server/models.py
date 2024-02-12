from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from faker import Faker

db = SQLAlchemy()
fake = Faker()

class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    
    # Add relationship
    classes = db.relationship('Order', back_populates='customer', cascade = 'all, delete')

    # Add serialization rules
    serialize_rules=('-Orders.customer',)

    @validates('id', 'name')
    def validate_customer(self, key, value):
        if key == 'name':
            if not value or (not isinstance(value, str)):
                raise ValueError('Name must be a chracter!')
            return value
        if key == 'id':
            if not 50 <= value <= 100:
                raise ValueError('Id must be between 50 and 100!')
            return value
    
    def __repr__(self):
        return f'<Customer {self.id}: {self.name} >'