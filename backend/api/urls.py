from rest_framework import routers
from django.urls import path, include

# Importing the viewsets for projects and employees
from projects.api import ProjectViewSet
from employees.api import EmployeeViewSet
from habilities.api import HabilityViewSet
from cv.api import CVViewSet

# A single router to rule them all
router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'employees', EmployeeViewSet, basename='employees')
router.register(r'habilities', HabilityViewSet, basename='habilities')
router.register(r'cv', CVViewSet, basename='cv')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
