from django.db import models
import uuid
import os

from colorfield.fields import ColorField


def recipe_image_file_path(instance, filename):
    """Generate file path for new recipe image"""
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('products/', filename)


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0.00)
    description = models.CharField(max_length=255)
    image = models.ImageField(null=True, upload_to=recipe_image_file_path)

    def __str__(self):
        return self.name


class StyleSettings(models.Model):
    class Meta:
        verbose_name_plural = "style settings"

    logo = models.ImageField(null=True, upload_to=recipe_image_file_path)
    main_background = models.ImageField(
        null=True, upload_to=recipe_image_file_path)
    text_color = ColorField(default='#000000')

    def __str__(self):
        return 'My Settings'
