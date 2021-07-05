from django.shortcuts import render
from rest_framework import generics
from core.models import Subscribers
# from .serializers import ProductSerializer
# Create your views here.


class ListCreateSubscriber(generics.RetrieveAPIView):

    queryset = Subscribers.objects.all()
    # serializer_class = ProductSerializer
