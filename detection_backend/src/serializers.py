import email
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password")
        extra_kwargs = {"password": {"write_only": True, "required": True}}

    def create(self, validate_data):
        user = User.objects.create_user(**validate_data)
        return user

    def authenticateUser(request):
        email = None
        if request.user.is_authenticated():
            email = request.user.email
        return
