from rest_framework import serializers
from .models import Customer,Employee,Job,Offer,Reviews

class Customer_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'User', 'payment', 'address' ]
        



class Employee_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'user', 'location', 'ratings','payment','lat','lng']
       

class Job_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'customer', 'job_description', 'street', 'city', 'state', 'zip_code', 'status', 'final_ammount','lat','lng']
        

class Offer_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id','employee', 'job', 'offer_ammount', 'status']
        

class Reviews_Serializer(serializers.ModelSerializer):
    class Mate:
        model = Reviews
        fields = ['id', 'employee', 'review']


