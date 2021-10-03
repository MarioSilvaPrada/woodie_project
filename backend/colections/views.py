from rest_framework.generics import ListAPIView
from core.models import Colecao
from .serializers import CollectionSerializer


class ListCollectionView(ListAPIView):
    queryset = Colecao.objects.all()
    serializer_class = CollectionSerializer
