from django.db import models

class Whether(models.Model):
    Precipitation = models.CharField(null=True,max_length=200)
    Date = models.CharField(max_length=100,null=True)
    Month = models.IntegerField(null=True)
    Week = models.IntegerField(null=True)
    Year= models.CharField(max_length=100,null=True)
    Citys= models.CharField(max_length= 200,blank=True) 
    Code = models.CharField(max_length = 200,blank=True)
    Location = models.CharField(max_length = 200,null=True)
    State = models.CharField(max_length=200,null=True)
    AvgTemp = models.CharField(max_length = 100,null=True)
    MaxTemp = models.CharField(max_length=100,null=True)
    MinTemp= models.CharField(max_length=100,null=True)
    Speed = models.CharField(max_length=100,null=True)

    def __int__(self):
        return self.Location()

