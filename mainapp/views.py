from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404
from .models import Product

# import the logging library
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)


# Create your views here.
def StronaGlowna(request):
    try:
        if request.method == 'GET':
            return render(request, "StronaGlowna.html")
            # text = """<h1>welcome to my app !</h1>"""
            # return HttpResponse(text)
        elif request.method == 'POST':
            text = """<h1>Looks like your web browser tried to POST</h1>"""
            return HttpResponse(text)
    except Exception as e:
        raise Http404("Something went wrong")
    #     logger.error('Something went wrong!')
    #     logger.error(logging.debug)
    #     return HttpResponse("Some problem")

def ONas(request):
    try:
        if request.method == 'GET':
            return render(request, "ONas.html")
        elif request.method == 'POST':
            text = """<h1>Looks like your web browser tried to POST</h1>"""
            return HttpResponse(text)
    except Exception as e:
        raise Http404("Something went wrong")

def Uslugi(request):
    try:
        if request.method == 'GET':
            return render(request, "Uslugi.html")
        elif request.method == 'POST':
            text = """<h1>Looks like your web browser tried to POST</h1>"""
            return HttpResponse(text)
    except Exception as e:
        raise Http404("Something went wrong")


def GotoweRozwiazania(request):
    return render(request, "GotoweRozwiazania.html")
    # try:
    #     if request.method == 'GET':
    #         return render(request, "GotoweRozwiazania.html")
    #     elif request.method == 'POST':
    #         text = """<h1>Looks like your web browser tried to POST</h1>"""
    #         return HttpResponse(text)
    # except Exception as e:
    #     raise Http404("Something went wrong")


def Kontakt(request):
    return render(request, "Kontakt.html")
