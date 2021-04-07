from rest_framework import generics
from core.models import Product
from .serializers import ProductSerializer

class ProductAPIView(generics.ListAPIView):
    queryset = Product.objects.all() 
    serializer_class = ProductSerializer