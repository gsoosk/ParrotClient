# Generated by Django 2.1 on 2018-08-16 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parrotServer', '0002_auto_20180816_1947'),
    ]

    operations = [
        migrations.AlterField(
            model_name='command',
            name='param',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]