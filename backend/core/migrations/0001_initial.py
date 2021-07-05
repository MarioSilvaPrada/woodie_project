# Generated by Django 3.2 on 2021-07-05 22:33

import colorfield.fields
import core.models
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, default=0.0, max_digits=6)),
                ('description', models.CharField(max_length=255)),
                ('altura', models.DecimalField(decimal_places=2, max_digits=6)),
                ('largura', models.DecimalField(decimal_places=2, max_digits=6)),
                ('comprimento', models.DecimalField(decimal_places=2, max_digits=6)),
                ('main_image', models.ImageField(null=True, upload_to=core.models.recipe_image_file_path)),
                ('image1', models.ImageField(blank=True, null=True, upload_to=core.models.recipe_image_file_path)),
                ('image2', models.ImageField(blank=True, null=True, upload_to=core.models.recipe_image_file_path)),
                ('image3', models.ImageField(blank=True, null=True, upload_to=core.models.recipe_image_file_path)),
                ('destacar_produto', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'Produtos',
            },
        ),
        migrations.CreateModel(
            name='StyleSettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.ImageField(null=True, upload_to=core.models.settings_image)),
                ('main_background', models.ImageField(null=True, upload_to=core.models.settings_image)),
                ('text_color', colorfield.fields.ColorField(default='#000000', max_length=18)),
            ],
            options={
                'verbose_name_plural': 'Configurações gerais',
            },
        ),
        migrations.CreateModel(
            name='Subscribers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255, unique=True)),
            ],
            options={
                'verbose_name_plural': 'Subscrições',
            },
        ),
        migrations.CreateModel(
            name='Reservas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('primeiro_nome', models.CharField(max_length=155)),
                ('ultimo_nome', models.CharField(max_length=155, verbose_name='Último nome')),
                ('email', models.EmailField(max_length=255, verbose_name='E-mail')),
                ('contacto_telefonico', models.CharField(blank=True, max_length=17, validators=[django.core.validators.RegexValidator(message='Phone number must be entered in a valid format.', regex='^\\+?1?\\d{9,15}$')], verbose_name='Contacto telefónico')),
                ('cidade', models.CharField(blank=True, max_length=155)),
                ('comentario', models.TextField(blank=True, verbose_name='Comentário')),
                ('produto', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.product')),
            ],
            options={
                'verbose_name_plural': 'Reservas',
            },
        ),
    ]
