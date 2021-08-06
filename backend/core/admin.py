from django.contrib import admin
from core import models


class ReservasInline(admin.StackedInline):
    model = models.Reservas
    ordering = ('produto',)
    extra = 0


class ColecaoAdmin(admin.ModelAdmin):
    list_display = ['name']


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price']
    inlines = [ReservasInline]


class ReservationAdmin(admin.ModelAdmin):
    list_display = ['produto', 'primeiro_nome', 'ultimo_nome', 'email']


class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email']


admin.site.register(models.Colecao, ColecaoAdmin)
admin.site.register(models.Product, ProductAdmin)
admin.site.register(models.Reservas, ReservationAdmin)
admin.site.register(models.StyleSettings)
admin.site.register(models.Subscribers, SubscriptionAdmin)
