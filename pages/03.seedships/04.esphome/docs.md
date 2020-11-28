---
title: 'ESPHome (micro-controller)'
---

# Patterns
# Best Practices
# Additional features


## Creating your own HAL templates
You'll need to mount the /config folder to esphome/config. There is already 
an entry in .env, you'll just have to comment out the bottom reference esphome_live_mount. 
In production, the esphome/config folder isn't created, so you'll have to run ```mkdir -p esphome/config``` 
from the technocore folder. 