from django.shortcuts import render
from rest_framework import generics
from rest_framework import mixins
from .models import Log
from .models import Command
from .serializers import LogSerilizer
from .serializers import CommandSerilizer
# Create your views here.

class LogView(mixins.CreateModelMixin, generics.ListAPIView):
    queryset = Log.objects.all()
    serializer_class = LogSerilizer

    def perform_create(self, serializer):
        serializer.save()
        #You can acces name & familyName & id & phoneNumber
        # with serializer.data['name'] & ...
        # print(serializer.data['name'])
        # print(serializer.data['familyName'])
        # print(serializer.data['phoneNumber'])
        # print(serializer.data['id'])

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class CommandView(mixins.CreateModelMixin, generics.ListAPIView):
    queryset = Command.objects.all()
    serializer_class = CommandSerilizer

    def perform_create(self, serializer):
        serializer.save()
        # You can acces owner & commandName & id & param
        # with serializer.data['name'] & ...
        # print(serializer.data['owner'])
        # print(serializer.data['commandName'])
        # print(serializer.data['param'])
        # print(serializer.data['id'])

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class CommandsOfUserView(generics.ListAPIView):
    serializer_class = CommandSerilizer
    def get_queryset(self):
        queryset = Command.objects.filter(owner__id=self.kwargs['pk'])
        return queryset

