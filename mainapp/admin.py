from django.contrib import admin

# Register your models here.
from .models import BlogCategory, BlogPost, BlogType, Comments, User

admin.site.register(BlogPost)
admin.site.register(BlogCategory)
admin.site.register(BlogType)
admin.site.register(User)
admin.site.register(Comments)