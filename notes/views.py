from rest_framework import generics

from .models import Note
from .serializers import NoteSerializers

class NoteList(generics.ListCreateAPIView):
    queryset=Note.objects.all()
    serializer_class=NoteSerializers

class NoteDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=Note.objects.all()
    serializer_class=NoteSerializers
