from django.contrib import admin
from .models import Customer, Employee

# Register your models here.
admin.site.register(Employee)
admin.site.register(Customer)