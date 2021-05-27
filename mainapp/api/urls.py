from django.urls import path
from django.urls.conf import include

from rest_framework import routers
from .views import BlogCategoryViewSet, BlogPostViewSet, BlogTypeViewSet, LoginView, RegisterView, UserView, LogoutView

router = routers.SimpleRouter()
router.register('category', BlogCategoryViewSet, basename='category')
router.register('type', BlogTypeViewSet, basename='type')
router.register('blogpost', BlogPostViewSet, basename='blogpost')

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view())
]
urlpatterns += router.urls