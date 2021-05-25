from django.contrib import admin

# Register your models here.
from .models import BlogCategory, BlogPost, BlogType

admin.site.register(BlogPost)
admin.site.register(BlogCategory)
admin.site.register(BlogType)
