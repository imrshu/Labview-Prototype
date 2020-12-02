from django.urls import path
from .views import *

app_name = 'backpanel'

urlpatterns = [
    path('', backpanel_home, name='backpanel_home'),
    path('compute', run_computation, name='computation')
]
