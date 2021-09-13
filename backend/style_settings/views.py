from rest_framework import viewsets, mixins
from .serializers import StyleSettingsSerializer
from core.models import StyleSettings


class StyleSettingsAPIView(viewsets.GenericViewSet,
                           mixins.ListModelMixin,):
    queryset = StyleSettings.objects.all()
    serializer_class = StyleSettingsSerializer
