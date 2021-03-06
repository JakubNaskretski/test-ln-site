# Generated by Django 2.2 on 2019-04-22 15:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductType',
            fields=[
                ('product_type', models.CharField(max_length=30, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False)),
                ('product_name', models.CharField(max_length=25, unique=True)),
                ('product_ingredients', models.CharField(max_length=250)),
                ('product_description', models.CharField(max_length=250)),
                ('product_image', models.ImageField(upload_to='products')),
                ('product_type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='mainapp.ProductType')),
            ],
        ),
    ]
