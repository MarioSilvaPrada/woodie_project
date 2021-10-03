
from rest_framework import serializers
from core.models import Subscribers


class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscribers
        fields = '__all__'
