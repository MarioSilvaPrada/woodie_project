from django.contrib import admin
from core import models


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price']


admin.site.register(models.Product, ProductAdmin)
admin.site.register(models.StyleSettings)
