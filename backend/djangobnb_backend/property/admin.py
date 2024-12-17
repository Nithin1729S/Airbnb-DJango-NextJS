from django.contrib import admin

# Register your models here.
from .models import Property,Reservation
# Register your models here.
admin.site.register(Property )
admin.site.register(Reservation)