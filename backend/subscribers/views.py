from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from core.models import Subscribers
from .serializers import SubscriptionSerializer


class ListCreateSubscriber(CreateAPIView):

    queryset = Subscribers.objects.all()
    serializer_class = SubscriptionSerializer
