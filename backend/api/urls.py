from django.urls import path

from products.views import ProductAPIView

urlpatterns = [
    path('products', ProductAPIView.as_view()),
]
