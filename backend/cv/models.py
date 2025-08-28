from django.db import models

from employees.models import Employee
from projects.models import Project
from habilities.models import Hability
# Create your models here.
class CV(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    hability = models.ForeignKey(Hability, on_delete=models.CASCADE)
    level = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)