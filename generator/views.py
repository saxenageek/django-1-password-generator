# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
import random

# Create your views here.

def about(request):
	return render(request, 'generator/about.html')

def home(request):
	return render(request, 'generator/home.html', {'password': 'kasdkjsahd'})

def password(request):	
	characters = list('abcdefghijklmnopqrstuvwxyz')
	length = int(request.GET.get('length', 12))
	special = request.GET.get('special')
	uppercase = request.GET.get('uppercase')
	numbers = request.GET.get('numbers')
	thepassword = ''

	if uppercase:
		characters.extend(list('abcdefghijklmnopqrstuvwxyz'.upper()))

	if special:
		characters.extend(list('~!@#$%^&*_+=-{}:"<>?/.,'))

	if numbers:
		characters.extend(list('0123456789'))

	for x in range(length):
		thepassword += random.choice(characters)

	return render(request, 'generator/password.html', {'password': thepassword})