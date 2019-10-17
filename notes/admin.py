from django.contrib import admin

from .models import Note

class NotesAdmin(admin.ModelAdmin): 
    list_display = ('title', 'content', 'created_at','updated_at') # add this

admin.site.register(Note,NotesAdmin)
