from django import template


register = template.Library()

@register.inclusion_tag('main/tag/show_home.html')
def show_home():
    pass