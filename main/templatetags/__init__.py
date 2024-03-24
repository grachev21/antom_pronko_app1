from django import template


register = template.Library()

@register.inclusion_tag('main/tag_templates/line.html')
def line():
    pass
