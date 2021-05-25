from rest_framework import viewsets
from rest_framework.decorators import action

from .seriallizers import (
    BlogCategorySerializer,
    BlogPostSerializer,
    BlogPostListRetriveSerializer,
    BlogCategoryDetailSerializer,
    BlogTypeSerializer,
    BlogTypeDetailSerializer
)
from ..models import BlogCategory, BlogPost, BlogType


class BlogCategoryViewSet(viewsets.ModelViewSet):

    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer

    action_to_serializer = {
        "retrieve": BlogCategoryDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )

class BlogTypeViewSet(viewsets.ModelViewSet):

    queryset = BlogType.objects.all()
    serializer_class = BlogTypeSerializer

    action_to_serializer = {
        "retrieve": BlogTypeDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )

class BlogPostViewSet(viewsets.ModelViewSet):

    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    action_to_serializer = {
        "list": BlogPostListRetriveSerializer,
        "retrieve": BlogPostListRetriveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
