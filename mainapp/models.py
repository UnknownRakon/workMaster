from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager

   
class BlogCategory(models.Model):

        name = models.CharField(max_length=255, verbose_name='Имя категории')
        slug = models.SlugField(unique=True)

        def __str__(self):
            return self.name
class BlogType(models.Model):

        name = models.CharField(max_length=255, verbose_name='Тип поста')
        slug = models.SlugField(unique=True)

        def __str__(self):
            return self.name

class BlogPostQuerySet(models.QuerySet):

    def find_by_title_in_qs(self, post_title):
        return self.filter(title__icontains=post_title)

class BlogPostManager(models.Manager):

    def get_queryset(self):
        return BlogPostQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().filter(in_archive=False)

    def find_by_title_in_qs(self, post_title):
        return self.get_queryset().find_by_title_in_qs(post_title)

class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
            return self.email

class BlogPost(models.Model):
        blog_category = models.ForeignKey(BlogCategory, verbose_name='Имя категории', on_delete=models.CASCADE)
        blog_type =  models.ForeignKey(BlogType, verbose_name='Тип поста', on_delete=models.CASCADE)
        title = models.CharField(max_length=255, verbose_name='Название поста')
        salary = models.IntegerField(verbose_name='Зарплата')
        content = models.TextField()
        link = models.CharField(max_length=255, verbose_name='Ссылка для связи')
        image = models.ImageField(upload_to='blog_posts/', blank=True, null=True)
        pub_date = models.DateTimeField(auto_now=True)
        in_archive = models.BooleanField(default=False)
        owner = models.ForeignKey(User, verbose_name='Создатель', on_delete=models.PROTECT)
        objects = BlogPostManager()

        def __str__(self):
            return f"{self.title} из категории \"{self.blog_category.name}\" с типом \"{self.blog_type.name}\""

class Comments(models.Model):
        blog_post = models.ForeignKey(BlogPost, verbose_name='Имя поста', on_delete=models.PROTECT)
        owner = models.ForeignKey(User, verbose_name='Создатель', on_delete=models.PROTECT)
        comment = models.TextField(null=False)
        pub_date = models.DateTimeField(auto_now=True)

        def __str__(self):
            return f"Комментарий созданный {self.owner}"    

class Reviews(models.Model):
        owner = models.ForeignKey(User, verbose_name='Создатель', on_delete=models.PROTECT)
        value = models.IntegerField(null=False)
        content = models.TextField(null=True)
        pub_date = models.DateTimeField(auto_now=True)

        def __str__(self):
            return f"Оценка {self.value} оставленная {self.owner}"    