from django.contrib import admin
from .models import Whether
from import_export.admin import ImportExportModelAdmin

class jsonadmin(ImportExportModelAdmin,admin.ModelAdmin):
    ...

admin.site.register(Whether,jsonadmin)
