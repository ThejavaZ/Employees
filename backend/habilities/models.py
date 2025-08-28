from django.db import models

# Create your models here.
class Hability(models.Model):
    name = models.CharField(max_length=100)
    type = models.IntegerField() # 1: Technical, 2: Bland, 3: Other
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)