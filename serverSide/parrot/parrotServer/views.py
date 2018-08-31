from django.shortcuts import render
from rest_framework import generics
from .models import Log
from .models import Command
from .serializers import LogSerilizer
from .serializers import CommandSerilizer
# Create your views here.

class LogView(generics.ListCreateAPIView):
    queryset = Log.objects.all()
    serializer_class = LogSerilizer

class CommandView(generics.ListCreateAPIView):
    queryset = Command.objects.all()
    serializer_class = CommandSerilizer

class CommandsOfUserView(generics.ListAPIView):
    serializer_class = CommandSerilizer
    def get_queryset(self):
        queryset = Command.objects.filter(owner__id=self.kwargs['pk'])
        return queryset

