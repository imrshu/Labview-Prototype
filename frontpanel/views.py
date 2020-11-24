from django.shortcuts import render


def frontpanel_home(request):
    if request.method == 'GET':
        return render(request, 'frontpanel.html')