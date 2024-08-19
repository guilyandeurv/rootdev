from django.http import HttpResponse
from django.shortcuts import render

def first(request):
    return HttpResponse('<h1>Premier projet Django !</h1>')