
from rest_framework import serializers
from core.models import Product


class ProductSerializer(serializers.ModelSerializer):
    model = Product
    fields = '__all__'
