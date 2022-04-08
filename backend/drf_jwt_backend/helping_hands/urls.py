from django.urls import path
from helping_hands import views

urlpatterns = [
    path('', views.customer_list),
]