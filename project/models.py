from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100)
    key = models.TextField()
    brief = models.TextField()
    slogan = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    tag = models.TextField()
    introduction = models.TextField()

    content_1 = models.TextField()
    image_1 = models.FileField(upload_to='project/images/')
    content_2 = models.TextField()
    image_2 = models.FileField(upload_to='project/images/')
    content_3 = models.TextField()
    image_3 = models.FileField(upload_to='project/images/')

    def __str__(self):
        return self.title
