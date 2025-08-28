from rest_framework import serializers
from .models import Hability

class HabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Hability
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']