from django.shortcuts import render
from django.views.generic.list import ListView

class Home(ListView):
    model = "x"
    template_name = 'main/base.html'

    # def get_context_data(self, **kwargs):
    #     context = super().get_context_data(**kwargs)
    #     context = {
    #         'title': 'title',
    #     }
    #     return context
    




