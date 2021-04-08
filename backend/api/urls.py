from django.urls import path, include
from rest_framework.routers import DefaultRouter
from products.views import ProductAPIView


app_name = 'api'

# urlpatterns = [
#     path('products', ProductAPIView.as_view()),
# ]

router = DefaultRouter()
router.register('products', ProductAPIView)

urlpatterns = [
    path('', include(router.urls))
]
