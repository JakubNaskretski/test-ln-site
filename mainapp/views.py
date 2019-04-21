from django.shortcuts import render
from django.http import HttpResponse

# import the logging library
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)


# Create your views here.
def StronaGlowna(request):
    try:
        if request.method == 'GET':
            return render(request, "mainapp/StronaGlowna.html")
            # text = """<h1>welcome to my app !</h1>"""
            # return HttpResponse(text)
        elif request.method == 'POST':
            text = """<h1>Looks like your web browser tried to POST</h1>"""
            return HttpResponse(text)
    except Exception as e:
        logger.error('Something went wrong!')
        logger.error(logging.debug)
