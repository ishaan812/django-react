from django.db import models
import string
import random

# Create your models here.
def generate_unique_code():
    length=6

    while True:
        code = ''.join(random.choice(string.ascii_uppercase))
        if(Room.objects.filter(code=code).count()==0):
            break
    return code

class Room(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    host= models.CharField(max_length=50, default="")
    guest_can_pause = models.BooleanField(null=False, default=True)
    votes_to_skip = models.IntegerField(null=False, default=0)
    created_at = models.DateTimeField(auto_now_add=True)

