from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def StronaGlowna(request):
    try:
        if request.method == 'GET':
            # return render(request, "appone/StronaGlowna.html")
            text = """<h1>welcome to my app !</h1>"""
            return HttpResponse(text)
    except Exception as e:
        logger.error('Something went wrong!')
        logger.error(logging.debug)
