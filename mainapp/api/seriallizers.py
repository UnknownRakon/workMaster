from django.db import models
from django.db.models import fields
from rest_framework import serializers

from ..models import BlogPost, BlogCategory, BlogType

class BlogCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogCategory
        fields ='__all__'

class BlogCategoryDetailSerializer(serializers.ModelSerializer):

    posts = serializers.SerializerMethodField()

    class Meta:
        model = BlogCategory
        fields = '__all__'

    @staticmethod
    def get_posts(obj):
        return BlogPostSerializer(BlogPost.objects.filter(blog_category=obj), many=True).data

class BlogTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogType
        fields ='__all__'

class BlogTypeDetailSerializer(serializers.ModelSerializer):

    posts = serializers.SerializerMethodField()

    class Meta:
        model = BlogType
        fields = '__all__'

    @staticmethod
    def get_posts(obj):
        return BlogPostSerializer(BlogPost.objects.filter(blog_type=obj), many=True).data

class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = '__all__'

class BlogPostListRetriveSerializer(serializers.ModelSerializer):

    blog_category = BlogCategorySerializer()
    blog_type = BlogTypeSerializer()

    class Meta:
        model = BlogPost
        fields = '__all__'