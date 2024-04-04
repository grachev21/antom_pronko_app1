from django.shortcuts import render
from django.views.generic.list import ListView
from main.models import Category

class Home(ListView):
    model = Category
    template_name = 'main/home.html'

    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     context = {
    #         'title': 'title',
    #     }
    #     return context
    




