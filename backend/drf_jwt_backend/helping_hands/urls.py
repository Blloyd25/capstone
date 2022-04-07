from django.urls import path
from helping_hands import views

urlpatterns = [
    path('', views.user_helping_hands),
]