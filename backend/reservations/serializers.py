
from rest_framework import serializers
from core.models import Reservas

class ReservationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reservas
        fields = '__all__'
