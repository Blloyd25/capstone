from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Customer(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.ForeignKey(User, on_delete=models.CASCADE)
    payment = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction = models.IntegerField()
    address = models.CharField(max_length=255)


class Employee(models.Models):
    user= models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction = models.IntegerField()
    ratings = models.CharField(max_length=255)


