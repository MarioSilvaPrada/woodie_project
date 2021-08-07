
from rest_framework import serializers
from core.models import Colecao


class CollectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Colecao
        fields = '__all__'
