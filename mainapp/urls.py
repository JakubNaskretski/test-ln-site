from django.urls import path, re_path
from mainapp import views
from django.conf import settings
from django.conf.urls.static import static
from django.conf import settings

app_name = 'mainapp'

urlpatterns = [
    # path('uslugi/', views.Uslugi,name='Uslugi'),
    # path('gotowerozwiazania/', views.GotoweRozwiazania, name='GotoweRozwiazania'),
    # path('blog/', views.Blog, name='Blog'),
    # path('onas/', views.ONas, name='ONas'),
    path('kontakt/', views.Kontakt, name='Kontakt')
]
