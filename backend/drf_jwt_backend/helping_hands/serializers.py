from rest_framework import serializers
from .models import Customer,Employee,Job,Offer,Reviews

class Customer_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'User', 'location', 'payment', 'transaction', 'address' ]
        depth = 1



class Employee_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'location', 'transaction', 'ratings']
        depth = 1

class Job_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'customer_id', 'job_description', 'street', 'city', 'state', 'zip_code', 'status', 'final_ammount']
        depth = 1

class Offer_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id','employee_id', 'job_id', 'offer_ammount', 'status']
        depth = 1

class Reviews_Serializer(serializers.ModelSerializer):
    class Mate:
        model = Reviews
        fields = ['id', 'employee_id', 'review']


