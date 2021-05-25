from django.urls import path

from rest_framework import routers
from .views import BlogCategoryViewSet, BlogPostViewSet, BlogTypeViewSet

router = routers.SimpleRouter()
router.register('category', BlogCategoryViewSet, basename='category')
router.register('type', BlogTypeViewSet, basename='type')
router.register('blogpost', BlogPostViewSet, basename='blogpost')

urlpatterns = []
urlpatterns += router.urls