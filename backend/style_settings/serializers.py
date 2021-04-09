
from rest_framework import serializers
from core.models import StyleSettings


class StyleSettingsSerializer(serializers.ModelSerializer):

    class Meta:
        model = StyleSettings
        fields = '__all__'
