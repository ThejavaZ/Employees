from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__' # se puede hacer de esta otra manera field = ('id', 'name', 'position', 'department', 'email', 'phone', 'created_at', 'updated_at', )
        read_only_fields = ('created_at', 'updated_at', )