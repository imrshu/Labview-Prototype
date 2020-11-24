from django.urls import path
from .views import *

app_name = 'frontpanel'

urlpatterns = [
    path('', frontpanel_home, name='frontpanel_home')
]
