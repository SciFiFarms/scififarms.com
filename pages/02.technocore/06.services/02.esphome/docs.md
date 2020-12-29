---
title: 'ESPHome Links'
taxonomy:
    category:
        - docs
---

ESPs are the eyes and ears of TechnoCore. They aren't mandatory, but I'd highly recommend looking around [ESPHome's Documentation](https://esphome.io/) to see what is possible and how it works. 

Note: I'm still exploring how to manage the ESPs in a sane and DRY way. Here are the methods I've employed:
  - Mounted the /config folder to a folder on the server, and then used NextCloud to sync changes between my local machine and the server. 
    This is my current solution. 
  - Mounted the /config folder to a folder on the server, and then used sshfs to mount that folder on my local machine. To do this, you'll need to setup passwordless ssh to your server, and the add something like the following to your /etc/fstab:
    ```technocore@technocore:/home/technocore/technocore/esphome/config /home/spencer/src/technocore/hals fuse.sshfs noauto,x-systemd.automount,_netdev,users,idmap=user,allow_other,reconnect 0 0```
    This worked OK when I was on the local network, but broke when I left the network. 
  - Used the text editor from within ESPHome. This worked OK, but doesn't have a way of editing files in folders, nor of creating symlinks. 

# Service Information
[Seedships: ESPHome](../../../seedships/esphome)  
[ESPHome Documentation](https://esphome.io/)  
[ESPHome's GitHub Repo](https://github.com/esphome/esphome)  
[TechnoCore's ESPHome GitHub Repo](https://github.com/SciFiFarms/TechnoCore-ESPHome)  

---
# Documentation
## [Getting Started](https://esphome.io/guides/getting_started_hassio.html)

## [Automations](https://esphome.io/guides/automations.html)
Meat of how to program ESPs. Not very long.

## [Filters](https://esphome.io/components/sensor/index.html#sensor-filters)
How to manipulate and correct readings

## [Configuration Types](https://esphomelib.com/esphomeyaml/guides/configuration-types.html)
Good bit on using substitutions

## [!directives](https://esphome.io/guides/faq.html#tips-for-using-esphome)
ESPHome supports most of Home Assistant's !directives (!include, !secret... etc.). 
[Home Assistant's page](https://www.home-assistant.io/docs/configuration/splitting_configuration/) about !directives

## Examples

### [Settings for premade devices](https://esphome-configs.io/devices/)
Think smartplugs, lights, and wall switches.

### !import other files:
https://github.com/nuttytree/ESPHome-Devices/blob/bd9b81baed6acc739fb4894d96b40abf5d3452a0/living_room_lights.yaml

### Battery powered ESP32 deep sleep (BME200)
https://esphome-configs.io/devices/esp32deepsleepbme280/

---
# Devices
- [NodeMCU2 (ESP8266)](https://esphome.io/devices/nodemcu_esp8266.html)  
  Includes pin map and explanation.
- [ESP32 - NodeMCU](https://esphome.io/devices/nodemcu_esp32.html)  
  Includes pin map and quirks.
- [Custom Components](https://esphome.io/custom/custom_component.html)  
  has example of MQTT integration.
- [Home Assistant Component](https://esphome.io/components/api.html#api-services)  
- [Home Assistant sensor](https://esphome.io/components/sensor/homeassistant.html)  
  Import any Home Assistant Entity state.
- [Time](https://esphome.io/components/time.html)  
  Great for kicking off automation at a given time
- [ADC Senor](https://esphomelib.com/esphomeyaml/components/sensor/adc.html)  
  Attenuation: https://esphome.io/components/sensor/adc.html#adc-esp32-attenuation  
  Adc information (Great for calibration): https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/peripherals/adc.html  
  https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/peripherals/adc.html#adc-api-adc-calibration
- [Esp32 Camera](https://esphome.io/components/esp32_camera.html)  
- [Teckin SP10](https://github.com/arendst/Sonoff-Tasmota/wiki/Teckin-sp10)
  The SP10 doesn't do energy monitoring - it is only a switch. 
- [Custom SPI](https://esphome.io/custom/spi.html)
- [Soil sensor calibration discussion](https://www.reddit.com/r/homeassistant/comments/bqw3dw/esphome_and_home_assistant_soil_capacitance/)
- [Linear Filter](https://esphome.io/components/sensor/index.html#sensor-filter-calibrate-linear)  

## List of 3rd party devices that ESP Home supports (Teckin, Sonoff...)
https://esphome.io/devices/sonoff.html

---
# Calibration
## Calibrate Teckin with ESPHome
https://blog.quindorian.org/2019/02/home-assistant-10-wifi-energy-meter-with-esphome.html/
https://frenck.dev/calibrating-an-esphome-flashed-power-plug/

### Example calibrating a sensor
https://esphomelib.com/esphomeyaml/components/sensor/hx711.html?highlight=calibrate

### A sensor with a "baseline" built in for calibration
https://esphome.io/components/sensor/ccs811.html?highlight=i2c

---
# C++ Tips:
## String to int: atoi(myString.c_str())  
https://stackoverflow.com/questions/7663709/how-can-i-convert-a-stdstring-to-int

## const char[] vs std::string
https://softwareengineering.stackexchange.com/questions/149350/how-to-nicely-use-constant-stdstring-in-c#answer-149351

---
# Troubleshooting
## How to use specific esphome-core version.
https://esphome.io/components/esphomeyaml#esphomeyaml-esphomelib-version

## Increase the number of inotify watchers in order to get Guard to work: 
https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers

## Considerations for setting up ESPHome as a stand alone service
https://community.home-assistant.io/t/esphomelib-help-docker/62383/10
