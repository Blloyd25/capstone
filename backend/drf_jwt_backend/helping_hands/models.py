from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Customer(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    payment = models.CharField(max_length=255)
    transaction = models.IntegerField()
    address = models.CharField(max_length=255)


class Employee(models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=255)
    transaction = models.IntegerField()
    ratings = models.CharField(max_length=255)


class Job(models.Model):
    customer_id = models.ForeignKey(Customer,on_delete=models.CASCADE)
    job_description = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.IntegerField()
    status = models.CharField(max_length=255)
    final_ammount = models.IntegerField()

class Offer(models.Model):
    employee_id = models.ForeignKey(Employee,on_delete=models.CASCADE)
    job_id = models.ForeignKey(Job,on_delete=models.CASCADE)
    offer_ammount = models.IntegerField()
    status = models.CharField(max_length=255)

class Reviews(models.Model):
    employee_id = models.ForeignKey(Employee, on_delete=models.CASCADE)
    review = models.CharField(max_length=255)





