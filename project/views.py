from django.shortcuts import render, get_object_or_404
from .models import Project


def all_project(request):
    projects = Project.objects.all()
    return render(request, 'project/all_project.html', {'projects': projects})


def detail_project(request, project_title):
    project = get_object_or_404(Project, title=project_title)
    return render(request, 'project/detail_project.html', {'project': project})
