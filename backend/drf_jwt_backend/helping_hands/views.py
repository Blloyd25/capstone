from django.shortcuts import get_list_or_404
from rest_framework import status
from rest_framework import response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from .serializers import Customer_Serializer, Employee_Serializer
from .models import Customer, Employee



@api_view(['GET','POST'])
def customer_list(request):

    if request.method == 'GET':
        helping_hands = Customer.objects.all()
        serializer = Customer_Serializer(helping_hands,many=True)
        return response (serializer.data)

    elif request.method == 'POST':
        serializer = Customer_Serializer(data=request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def customer_detail(request, pk):
    helping_hands =get_list_or_404 (Customer, pk=pk)
    if request.method == 'GET':
        serializer = Customer_Serializer(helping_hands)
        return response(serializer.data)
    elif request.method =='PUT':
        serializer = Customer_Serializer(helping_hands, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save
        return response(serializer.data)
    elif request.method == 'DELETE':
        customer_detail.delete()
        return response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET','POST'])
def employee_list(request):

    if request.method == 'GET':
        helping_hands = Employee.objects.all()
        serializer = Employee_Serializer(helping_hands,many=True)
        return response (serializer.data)

    elif request.method == 'POST':
        serializer = Employee_Serializer(data=request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def employee_detail(request, pk):
    helping_hands =get_list_or_404 (Employee, pk=pk)
    if request.method == 'GET':
        serializer = Employee_Serializer(helping_hands)
        return response(serializer.data)
    elif request.method =='PUT':
        serializer = Employee_Serializer(helping_hands, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save
        return response(serializer.data)
    elif request.method == 'DELETE':
        employee_detail.delete()
        return response(status=status.HTTP_204_NO_CONTENT)



