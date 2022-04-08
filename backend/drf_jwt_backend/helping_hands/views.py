from django.shortcuts import get_list_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from .serializers import Customer_Serializer, Employee_Serializer, Job_Serializer, Reviews_Serializer, Offer_Serializer
from .models import Customer, Employee, Offer, Job, Reviews




@api_view(['GET','POST'])
def customer_list(request):
    if request.method == 'GET':
        helping_hands = Customer.objects.all()
        serializer = Customer_Serializer(helping_hands,many=True)
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = Customer_Serializer(data=request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'PUT'])
def customer_detail(request, pk):
    helping_hands =get_list_or_404 (Customer, pk=pk)
    if request.method == 'GET':
        serializer = Customer_Serializer(helping_hands)
        return Response(serializer.data)
    elif request.method =='PUT':
        serializer = Customer_Serializer(helping_hands, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save
        return Response(serializer.data)
    





@api_view(['GET','POST'])
def employee_list(request):

    if request.method == 'GET':
        helping_hands = Employee.objects.all()
        serializer = Employee_Serializer(helping_hands,many=True)
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = Employee_Serializer(data=request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'PUT'])
def employee_detail(request, pk):
    helping_hands =get_list_or_404 (Employee, pk=pk)
    if request.method == 'GET':
        serializer = Employee_Serializer(helping_hands)
        return Response(serializer.data)
    elif request.method =='PUT':
        serializer = Employee_Serializer(helping_hands, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save
        return Response(serializer.data)






@api_view(['GET','POST'])
def job_list(request):
    if request.method == 'GET':
        helping_hands = Job.objects.all()
        serializer = Job_Serializer(helping_hands,many=True)
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = Job_Serializer(data=request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'PUT'])
def job_detail(request, pk):
    helping_hands =get_list_or_404 (Job, pk=pk)
    if request.method == 'GET':
        serializer = Job_Serializer(helping_hands)
        return Response(serializer.data)
    elif request.method =='PUT':
        serializer = Job_Serializer(helping_hands, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save
        return Response(serializer.data)






@api_view(['GET','POST'])
def offer_list(request):
    if request.method == 'GET':
        helping_hands = Offer.objects.all()
        serializer = Offer_Serializer(helping_hands,many=True)
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = Offer_Serializer(data=request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'PUT'])
def offer_detail(request, pk):
    helping_hands =get_list_or_404 (Offer, pk=pk)
    if request.method == 'GET':
        serializer = Offer_Serializer(helping_hands)
        return Response(serializer.data)
    elif request.method =='PUT':
        serializer = Offer_Serializer(helping_hands, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save
        return Response(serializer.data)






@api_view(['GET','POST'])
def reviews_list(request):
    if request.method == 'GET':
        helping_hands = Reviews.objects.all()
        serializer = Reviews_Serializer(helping_hands,many=True)
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = Reviews_Serializer(data=request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'PUT'])
def reviews_detail(request, pk):
    helping_hands =get_list_or_404 (Reviews, pk=pk)
    if request.method == 'GET':
        serializer = Reviews_Serializer(helping_hands)
        return Response(serializer.data)
    elif request.method =='PUT':
        serializer = Reviews_Serializer(helping_hands, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save
        return Response(serializer.data)
    



