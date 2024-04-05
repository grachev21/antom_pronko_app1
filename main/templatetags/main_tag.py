from django import template

register = template.Library()


@register.inclusion_tag('main/tags/show_home_block.html')
def show_home_block():
    pass


@register.inclusion_tag('main/tags/show_home_catalog.html')
def show_home_catalog():
    pass