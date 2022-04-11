from django.urls import path
from helping_hands import views

urlpatterns = [
    path('customer/', views.customer_list),
    path('customer/<int:pk>', views.customer_detail),
    path('employee/', views.employee_list),
    path('employee/<int:pk>', views.employee_detail),
    path('jobs/', views.job_list),
    path('jobs/<int:pk>', views.job_detail),
    path('offers/', views.offer_list),
    path('offers/<int:pk>', views.offer_detail),
    path('reviews/', views.reviews_list),
    path('reviews/<int:pk>', views.reviews_detail)
   

]