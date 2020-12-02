from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('frontpanel', include('frontpanel.urls', namespace='front')),
    path('backpanel/', include('backpanel.urls', namespace='back')),
]
