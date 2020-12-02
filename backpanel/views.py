from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ast import literal_eval


def backpanel_home(request):
    if request.method == 'GET':
        return render(request, 'backpanel.html')


@csrf_exempt
def run_computation(request):
    if request.method == 'POST':
        body = literal_eval(request.body.decode('utf-8'))
        return JsonResponse(eval(body.get('data')), safe=False)