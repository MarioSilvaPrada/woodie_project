from django.db import models
import uuid
import os

from colorfield.fields import ColorField


def settings_image(instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('static/images/site_settings/', filename)


def recipe_image_file_path(instance, filename):
    """Generate file path for new recipe image"""
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('static/images/products/', filename)


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0.00)
    description = models.CharField(max_length=255)
    main_image = models.ImageField(null=True, upload_to=recipe_image_file_path)
    image1 = models.ImageField(
        null=True, blank=True, upload_to=recipe_image_file_path)
    image2 = models.ImageField(
        null=True, blank=True, upload_to=recipe_image_file_path)
    image3 = models.ImageField(
        null=True, blank=True, upload_to=recipe_image_file_path)

    def __str__(self):
        return self.name


class StyleSettings(models.Model):
    class Meta:
        verbose_name_plural = "style settings"

    logo = models.ImageField(null=True, upload_to=settings_image)
    main_background = models.ImageField(
        null=True, upload_to=settings_image)
    text_color = ColorField(default='#000000')

    def __str__(self):
        return 'My Settings'
