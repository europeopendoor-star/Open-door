import re

with open("index.html", "r") as f:
    content = f.read()

content = content.replace("<title>My Google AI Studio App</title>", "<title>OpenDoor - Unlock Your Career in Europe</title>\n    <meta name=\"description\" content=\"OpenDoor is a premier recruitment platform designed to connect international talent with top European employers.\" />")

with open("index.html", "w") as f:
    f.write(content)
