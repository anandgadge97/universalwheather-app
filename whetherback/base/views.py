from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Whether
from .serializers import WhetherSerializers

@api_view(['GET'])
def getData(request):
    jsondata1 = Whether.objects.all()
    serializers=WhetherSerializers(jsondata1,many=True)
    return Response(serializers.data)
    
