from django.db import models
from django.db.models import fields
from rest_framework import serializers

from ..models import BlogPost, BlogCategory, BlogType, Comments, Reviews, User

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

class BlogOwnerSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields =['email']

class CommentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields = '__all__'

class CommentsDetailSerializer(serializers.ModelSerializer):

    owner = BlogOwnerSerializer()

    class Meta:
        model = Comments
        fields = '__all__'


class BlogOwnerDetailSerializer(serializers.ModelSerializer):

    posts = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = '__all__'

    @staticmethod
    def get_posts(obj):
        return BlogOwnerSerializer(User.objects.filter(owner=obj), many=True).data
        
class BlogPostListRetriveSerializer(serializers.ModelSerializer):

    blog_category = BlogCategorySerializer()
    blog_type = BlogTypeSerializer()
    owner = BlogOwnerSerializer()
    comments = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = '__all__'

    def create(self, validated_data):
        post = BlogPost.objects.all(**validated_data)
        return post

    @staticmethod
    def get_comments(obj):
        return CommentsDetailSerializer(Comments.objects.filter(blog_post=obj), many=True).data

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None) 
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class ReviewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reviews
        fields = '__all__'

class ReviewsDetailSerializer(serializers.ModelSerializer):

    owner = BlogOwnerSerializer()

    class Meta:
        model = Reviews
        fields = '__all__'