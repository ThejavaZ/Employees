from .models import CV
from .serializers import CVSerializer
from rest_framework import viewsets, permissions

class CVViewSet(viewsets.ModelViewSet):
    queryset = CV.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CVSerializer