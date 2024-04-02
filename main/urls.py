from django.urls import path
from main.views import *


urlpatterns = [
    path('', Home.as_view(), name="home"),
]