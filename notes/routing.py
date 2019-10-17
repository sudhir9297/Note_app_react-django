from django.urls import path
from . import consumers

websocket_urlpatters=[
    path('ws/notes',consumers.NoteConsumer)
]