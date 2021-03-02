from django.shortcuts import render


def home(request):
    # portfolios = Portfolio.objects.all()
    return render(request, 'info/home.html')
