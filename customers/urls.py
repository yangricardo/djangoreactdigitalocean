from django.contrib import admin
from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.customers_list),
    re_path(r'^(?P<pk>[0-9]+)$', views.customers_detail),
]
