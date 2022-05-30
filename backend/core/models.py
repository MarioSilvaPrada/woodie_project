from django.db import models
import uuid
import os

from django.core.validators import RegexValidator
from django.db.models.signals import post_delete, post_save
from django.dispatch.dispatcher import receiver
from django.core.mail import send_mail
from django.conf import settings

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


class Colecao (models.Model):
    class Meta:
        verbose_name_plural = "Coleções"

    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    class Meta:
        verbose_name_plural = "Produtos"

    name = models.CharField(max_length=255)
    colecao = models.ForeignKey(Colecao, on_delete=models.SET_NULL, null=True)
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


@receiver(post_delete, sender=Product)
def delete_image_file(sender, instance, **kwargs):
    instance.main_image.delete(False)
    instance.image1.delete(False)
    instance.image2.delete(False)
    instance.image3.delete(False)


class StyleSettings(models.Model):
    class Meta:
        verbose_name_plural = "Configurações gerais"

    logo = models.ImageField(null=True, upload_to=settings_image)
    main_background = models.ImageField(
        null=True, upload_to=settings_image)
    text_color = ColorField(default='#000000')

    def __str__(self):
        return 'My Settings'


@receiver(post_delete, sender=StyleSettings)
def delete_image_file(sender, instance, **kwargs):
    instance.main_background.delete(False)


class Reservas (models.Model):
    class Meta:
        verbose_name_plural = "Reservas"

    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in a valid format.")

    primeiro_nome = models.CharField(max_length=155)
    ultimo_nome = models.CharField(max_length=155, verbose_name='Último nome')
    email = models.EmailField(
        max_length=255, unique=False, verbose_name='E-mail')
    contacto_telefonico = models.CharField(
        validators=[phone_regex], max_length=17, blank=True, verbose_name='Contacto telefónico')  # validators should be a list
    cidade = models.CharField(max_length=155, blank=True)
    comentario = models.TextField(blank=True, verbose_name='Comentário')
    subscrever = models.BooleanField(
        default=False,  verbose_name='Pretendo receber as últimas novidades da Woodi')
    produto = models.ForeignKey(
        Product,
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return f'{self.primeiro_nome} {self.ultimo_nome}'


class Subscribers(models.Model):
    class Meta:
        verbose_name_plural = "Subscrições"

    name = models.CharField(max_length=155)
    email = models.EmailField(max_length=255, unique=True)

    def __str__(self):
        return self.name


@receiver(post_save, sender=Reservas)
def send_reservation_notification(sender, instance, created, **kwargs):
    if not created:
        return

    subject = f'Nova reserva de {instance.primeiro_nome}'
    message = f'{instance.primeiro_nome} {instance.ultimo_nome} quer reservar uma peça: {instance.produto}'
    from_email = settings.WOODI_EMAIL
    to_emails = ['mariosilvaprada@gmail.com', 'info.da.woodi@gmail.com']

    send_mail(
        subject,
        message,
        from_email,
        to_emails,
        fail_silently=False,
    )


@receiver(post_save, sender=Subscribers)
def send_subscribers_notification(sender, instance, created, **kwargs):
    if not created:
        return

    subject = f'{instance.name} acabou de subscrever'
    message = f'Nome: {instance.name}, Email: {instance.email}'
    from_email = settings.WOODI_EMAIL
    to_emails = ['mariosilvaprada@gmail.com', 'info.da.woodi@gmail.com']

    send_mail(
        subject,
        message,
        from_email,
        to_emails,
        fail_silently=False,
    )
