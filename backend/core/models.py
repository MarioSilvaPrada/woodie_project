from django.db import models
import uuid
import os
from django.core.validators import RegexValidator

from colorfield.fields import ColorField


def settings_image(instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('images/site_settings/', filename)


def recipe_image_file_path(instance, filename):
    """Generate file path for new recipe image"""
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'

    return os.path.join('images/products/', filename)


class Product(models.Model):

    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0.00)
    description = models.CharField(max_length=255)
    altura = models.DecimalField(max_digits=6, decimal_places=2)
    largura = models.DecimalField(max_digits=6, decimal_places=2)
    comprimento = models.DecimalField(max_digits=6, decimal_places=2)
    main_image = models.ImageField(null=True, upload_to=recipe_image_file_path)
    image1 = models.ImageField(
        null=True, blank=True, upload_to=recipe_image_file_path)
    image2 = models.ImageField(
        null=True, blank=True, upload_to=recipe_image_file_path)
    image3 = models.ImageField(
        null=True, blank=True, upload_to=recipe_image_file_path)
    destacar_produto = models.BooleanField(default=False)

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


class Reservas (models.Model):
    class Meta:
        verbose_name_plural = "Reservas"

    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in a valid format.")

    primeiro_nome = models.CharField(max_length=155)
    ultimo_nome = models.CharField(max_length=155)
    email = models.EmailField(max_length=255, unique=False)
    contacto_telefonico = models.CharField(
        validators=[phone_regex], max_length=17, blank=True)  # validators should be a list
    cidade = models.CharField(max_length=155, blank=True)
    comentario = models.TextField()
    produto = models.ForeignKey(
        Product,
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return f'{self.primeiro_nome} {self.ultimo_nome}'
