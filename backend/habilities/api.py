from habilities.models import Hability
from .serializers import HabilitySerializer
from rest_framework import viewsets, permissions

class HabilityViewSet(viewsets.ModelViewSet):
    queryset = Hability.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = HabilitySerializer