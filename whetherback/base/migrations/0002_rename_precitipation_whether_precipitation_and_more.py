# Generated by Django 4.1.10 on 2023-11-18 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='whether',
            old_name='Precitipation',
            new_name='Precipitation',
        ),
        migrations.AlterField(
            model_name='whether',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]