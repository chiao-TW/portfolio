from django.urls import path
from . import views

app_name = 'project'

urlpatterns = [
    path('', views.all_project, name='all_project'),
    path('<str:project_title>/', views.detail_project, name='detail_project'),
]
