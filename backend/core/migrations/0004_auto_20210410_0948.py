# Generated by Django 3.2 on 2021-04-10 09:48

import core.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20210409_0835'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='stylesettings',
            options={'verbose_name_plural': 'style settings'},
        ),
        migrations.RenameField(
            model_name='product',
            old_name='image',
            new_name='main_image',
        ),
        migrations.AddField(
            model_name='product',
            name='image1',
            field=models.ImageField(null=True, upload_to=core.models.recipe_image_file_path),
        ),
        migrations.AddField(
            model_name='product',
            name='image2',
            field=models.ImageField(null=True, upload_to=core.models.recipe_image_file_path),
        ),
        migrations.AddField(
            model_name='product',
            name='image3',
            field=models.ImageField(null=True, upload_to=core.models.recipe_image_file_path),
        ),
    ]