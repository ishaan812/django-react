from django.urls import path,include
from .views import index

urlpatterns =[
    path('', index),
    path('product', index),
    path('artist', index)
]