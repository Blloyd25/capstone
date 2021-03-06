from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Customer(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    payment = models.CharField(max_length=255)
    address = models.CharField(max_length=255)


class Employee(models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=255)
    ratings = models.CharField(max_length=255)
    payment = models.CharField(max_length=255, null=True)
    lat= models.CharField(max_length=20, null =True)
    lng=models.CharField(max_length=20, null=True)


class Job(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE)
    job_description = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.IntegerField()
    status = models.CharField(max_length=255)
    final_ammount = models.IntegerField()
    lat= models.CharField(max_length=20, null =True)
    lng=models.CharField(max_length=20, null=True)


class Offer(models.Model):
    employee = models.ForeignKey(Employee,on_delete=models.CASCADE)
    job = models.ForeignKey(Job,on_delete=models.CASCADE)
    offer_ammount = models.IntegerField()
    status = models.CharField(max_length=255)

class Reviews(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    review = models.CharField(max_length=255)





