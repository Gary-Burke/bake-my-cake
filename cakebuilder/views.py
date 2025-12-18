from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def cakebuilder_app(request):
      return render(request, 'cakebuilder/cakebuilder.html')
