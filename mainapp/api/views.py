from http.client import responses
from django.contrib.auth.models import PermissionsMixin
from rest_framework import serializers, viewsets
from rest_framework import response
from rest_framework.decorators import action, api_view
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView
import jwt
import datetime
from rest_framework.permissions import AllowAny

from ..models import BlogCategory, BlogPost, BlogType, Comments, Reviews, User
from .seriallizers import (BlogCategoryDetailSerializer,
                           BlogCategorySerializer, BlogOwnerDetailSerializer, BlogOwnerSerializer,
                           BlogPostListRetriveSerializer, BlogPostSerializer,
                           BlogTypeDetailSerializer, BlogTypeSerializer, CommentsDetailSerializer, CommentsSerializer, 
                           ReviewsDetailSerializer, ReviewsSerializer,
                           UserSerializer)


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


class BlogOwnerViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = BlogOwnerSerializer

    action_to_serializer = {
        "retrieve": BlogOwnerDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
class CommentsViewSet(viewsets.ModelViewSet):

    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

    action_to_serializer = {
        "list": CommentsDetailSerializer,
        "retrieve": CommentsDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }

        return response


class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response


class PostList(APIView):

    def post(self, request):
        payload = request.data
        serializer = BlogPostListRetriveSerializer(data=payload)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        snippet = self.get_object(pk)
        serializer = BlogPostListRetriveSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class СommentList(APIView):
    def post(self, request):
        payload = request.data
        serializer = CommentsSerializer(data=payload)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReviewsViewSet(viewsets.ModelViewSet):

    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer

    action_to_serializer = {
        "list": ReviewsDetailSerializer,
        "retrieve": ReviewsDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )

class ReviewstList(APIView):
    def post(self, request):
        payload = request.data
        serializer = ReviewsSerializer(data=payload)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)