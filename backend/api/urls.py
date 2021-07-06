from django.urls import path
from products.views import ProductAPIView, SingleProductAPIView
from reservations.views import CreateReservationView
from style_settings.views import StyleSettingsAPIView
from subscribers.views import ListCreateSubscriber


app_name = 'api'


productsList = ProductAPIView.as_view({
    'get': 'list',
    'post': 'create'
})

styleSettingsList = StyleSettingsAPIView.as_view({
    'get': 'list',
})

urlpatterns = [
    path('products/', productsList, name='all_products'),
    path('products/<int:pk>/', SingleProductAPIView.as_view(), name='detail_product'),
    path('reservations/', CreateReservationView.as_view(), name='reservations'),
    path('style-settings/', styleSettingsList, name='all_style_settings'),
    # path('subscribe/', ListCreateSubscriber.as_view(), name='subscriptions'),
]
