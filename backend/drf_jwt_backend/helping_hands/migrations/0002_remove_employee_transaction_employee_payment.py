# Generated by Django 4.0.3 on 2022-04-11 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('helping_hands', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='transaction',
        ),
        migrations.AddField(
            model_name='employee',
            name='payment',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
