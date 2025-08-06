from django.db import models

# Create your models here.

class Employee(models.Model):
    # id = models.UUIDField(unique=True, max_length=11, primary_key=True, null=False)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.email