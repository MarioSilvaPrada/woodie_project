from rest_framework import viewsets, mixins
from core.models import Product
from .serializers import ProductSerializer


class ProductAPIView(viewsets.GenericViewSet,
                     mixins.ListModelMixin,
                     mixins.CreateModelMixin):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
