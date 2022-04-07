from rest_framework import serializers
from .models import Customer,Employee

class Customer_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'location', 'payment', 'transaction', 'address' ]
        depth = 1



class Employee_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'location', 'transaction', 'ratings']
        depth = 1