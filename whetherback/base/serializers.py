from rest_framework.serializers import ModelSerializer
from .models import Whether

class WhetherSerializers(ModelSerializer):
    class Meta:
        model = Whether
        fields = '__all__'