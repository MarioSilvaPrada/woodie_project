from django.urls import path, include
from rest_framework.routers import DefaultRouter
from products.views import ProductAPIView
from style_settings.views import StyleSettingsAPIView


app_name = 'api'

# urlpatterns = [
#     path('products', ProductAPIView.as_view()),
# ]

router = DefaultRouter()
router.register('products', ProductAPIView)
router.register('style-settings', StyleSettingsAPIView)

urlpatterns = [
    path('', include(router.urls))
]
