# Generated by Django 3.2.3 on 2021-06-01 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='content',
            field=models.TextField(null=True),
        ),
    ]