from django import template

register = template.Library()


@register.inclusion_tag('main/tags/show_home_block.html')
def show_home_block():
    pass


@register.inclusion_tag('main/tags/show_home_catalog.html')
def show_home_catalog():
    pass


@register.inclusion_tag('main/tags/mobile_menu.html')
def mobile_menu():
    pass


@register.inclusion_tag('main/tags/style_tag.html')
def style_tag():
    pass