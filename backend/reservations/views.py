from rest_framework.generics import CreateAPIView
from core.models import Reservas
from .serializers import ReservationSerializer


class CreateReservationView(CreateAPIView):
    queryset = Reservas.objects.all()
    serializer_class = ReservationSerializer
