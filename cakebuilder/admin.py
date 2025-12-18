from django.contrib import admin
from .models import Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    """
    Lists fields for display, search and filter in admin
    """

    list_display = ("customer", "quote", "status")
    search_fields = ["customer", "status"]
    list_filter = ("shape", "size", "sponge")


# Register your models here.
