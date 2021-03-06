from rest_framework.generics import CreateAPIView
from core.models import Reservas
from .serializers import ReservationSerializer

from core.models import Subscribers


class CreateReservationView(CreateAPIView):
    queryset = Reservas.objects.all()
    serializer_class = ReservationSerializer

    def perform_create(self, serializer):
        want_subscription = serializer.validated_data['subscrever']
        user_email = serializer.validated_data['email']
        name = f"{serializer.validated_data['primeiro_nome']} {serializer.validated_data['ultimo_nome']}"

        if want_subscription:
            try:
                email_exists_in_db = Subscribers.objects.get(email=user_email)

            except Exception:
                email_exists_in_db = None

            if not email_exists_in_db:
                Subscribers.objects.create(name=name, email=user_email)

        serializer.save()
