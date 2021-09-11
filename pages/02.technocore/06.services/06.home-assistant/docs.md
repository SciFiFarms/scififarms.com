---
title: 'Home Assistant Links'
taxonomy:
    category:
        - docs
---

## Signal API
```
./tc signal-api register
./tc signal-api register --captcha 03AGdBq26AYmopm_6OKfDPlswsF4ZEsBfNDncoSnaF2onVyh_f0PZgtB1t_lNPDYHkiSxfPeIMSIYaBm-pZO5k7-C34bvQl5ZMj5Ynt5SyjbiJ_H_88yNzgD19P6LpFAcu1r7_n6a4yfWrGb-iF31NGenCSVtScCKDLAgj67DZTXQJmpyz_ZdGD5HmTJTNbYOGEM4d3JFqLGyc6DAHM8OwOTgQf-lUahZ_uGgZ2tLOfqBLS7Ws72JUqiBARcI370efJw71cdZkmh-yk_eB4FmMlOzfJTS5SHyV9JSydyW0AcRtiwnJgl-U2SDFvnmwGYL-PbWHtv7r44MUo_qOfUtsV3IDMyT0QSVkn8Xcd921w-u0mVvDOcm3rgxgDKAfpuOGtxJcxf_RSQLQOq2SuOzpmf1VgErnskUS8dYwAsdvW4_epWoM02KGK3QDNSmOV8a6tmljjNqVA51BKnz9rMQ3ETya-6Aw-QfVcQ
./tc signal-api verify 180-643
./tc signal-api verify 180-643 --pin <YOUR_PIN>
# Not sure about this command!
./tc signal-api setPin --pin <YOUR_PIN>
```

## Projects
### NHL Sensor
https://github.com/JayBlackedOut/hass-nhlapi
https://github.com/JayBlackedOut/hass-nhlapi/blob/master/frontend.md
https://github.com/JayBlackedOut/hass-nhlapi/blob/master/automations.md

NHL things: https://www.reddit.com/r/homeassistant/comments/bkqerc/custom_sensor_nhl_game_info_need_testers/

---

### Projects and components I want to use:
High Availability: https://github.com/cvb941/HAHA
IDE: https://github.com/hassio-addons/addon-ide
https://community.home-assistant.io/t/community-hass-io-add-on-ide-based-on-cloud9/33810
https://www.home-assistant.io/components/calendar.caldav/
https://www.reddit.com/r/homeassistant/comments/ato1az/my_slate_dark_theme_fully_complete/
https://community.home-assistant.io/t/a-different-take-on-designing-a-lovelace-ui/162594
https://www.reddit.com/r/homeassistant/comments/auw5xu/home_assistant_new_user_interface_and_ui_editor/
https://old.reddit.com/r/homeassistant/comments/awuvc8/advanced_custom_calendar_card_google_calendar/
https://github.com/danielwelch/coc-homeassistant
https://www.reddit.com/r/homeassistant/comments/b9vioe/got_home_assistant_to_grab_the_game_info_for_my/
https://www.reddit.com/r/homeassistant/comments/9ycr63/my_lovelace_frontend/
https://www.reddit.com/r/homeassistant/comments/e1gwcp/automated_bathroom_exhaust_fan_using_humidity/
https://www.reddit.com/r/homeassistant/comments/d1hb60/cheap_and_easy_multiroom_sensing_for_your_hvac/
https://github.com/ljmerza/ha-email-sensor
https://www.reddit.com/r/homeassistant/comments/c14wu9/home_assistant_community_store/
https://www.reddit.com/r/homeassistant/comments/dtds0i/i_made_my_own_home_assistant_wallmote_wall_remote/
https://www.reddit.com/r/homeassistant/comments/f78h7n/new_energyconsumption_screen_still_tweaking_it/
Already setup in Jupyter: https://github.com/robmarkcole/HASS-data-detective
https://www.reddit.com/r/homeassistant/comments/bmenql/local_api_thermostat_recommendations/
Auto apply theme: https://community.home-assistant.io/t/make-a-theme-stay-after-reboot-broke-again/106751/13
Thermostat + heating: https://community.home-assistant.io/t/heaty-a-flexible-heating-control-facilitating-schedules-and-manual-intervention/34958
Manual data entry (Using API): https://www.reddit.com/r/homeassistant/comments/c1om01/how_to_use_siri_shortcuts_to_speak_a_sensor_value/
Git hooks for Home Assistant (Alternatives in comments!): https://www.reddit.com/r/homeassistant/comments/czzwmm/using_git_hooks_with_my_home_assistant_config/
     https://about.gitlab.com/2018/08/02/using-the-gitlab-ci-slash-cd-for-smart-home-configuration-management/
Bed Occupancy: https://everythingsmarthome.co.uk/howto/building-a-bed-occupancy-sensor-for-home-assistant/
How to share themes: https://www.reddit.com/r/homeassistant/comments/dhg9h4/home_assistant_community_themes/
Vacuum (RoboRock S4): https://aarongodfrey.dev/home%20automation/roborock_s4_lovelace_dashboard/

### Adding Home Assistant shortcuts to android home screens
https://webworxshop.com/quick-home-assistant-shortcuts-for-android/

## HASS.io
### Reference projects
Configurator: https://github.com/danielperna84/hass-configurator
Floorplan with lights that turn on and off: https://community.home-assistant.io/t/floorplan-with-many-lights-in-one-area-say-hello-to-transparent-png-files/90006/14
Weather Card with chart: https://community.home-assistant.io/t/lovelace-weather-card-with-chart/88816
Hacking the Xiaomifang Wifi Camera:https://community.home-assistant.io/t/hacking-the-xiaomifang-wifi-camera/18579
Send SMS via MQTT: https://community.home-assistant.io/t/send-sms-via-mqtt/45544/7
Grafana and Influx: https://community.home-assistant.io/t/complete-guide-on-setting-up-grafana-influxdb-with-home-assistant-using-official-docker-images/42860
Home Assistant on a smart phone: https://community.home-assistant.io/t/install-home-assistant-mosquitto-broker-and-node-red-on-android/14350/22
Solderless flashable wifi light (Kuled): https://community.home-assistant.io/t/cheaper-wifi-light-switch-amazon-kuled/69844/27
How to take a cumulative reading and turn it into a span. Could answer how much did I grow this light period: https://community.home-assistant.io/t/how-to-daily-rain-sensor-from-cumulative-sensor-using-mqtt-and-template-sensor/20243
Monitor power with a DIN mounted interface. Maybe a good step in the PLC direction: https://community.home-assistant.io/t/power-monitoring-with-an-xtm18s-and-mqtt/16316
Automation with Kodi: https://www.home-assistant.io/cookbook/automation_kodi_dynamic_input_select/
Turn off camera when home: https://www.home-assistant.io/cookbook/foscam_away_mode_PTZ/
Testing your security: https://community.home-assistant.io/t/test-your-security-and-test-it-often/76354/4
Automated window shuttors: https://www.reddit.com/r/homeassistant/comments/ahdmsv/diy_window_shutter_control_and_sensors/
Lovelace light card: https://github.com/ljmerza/light-entity-card
Text to speech discussion: https://www.reddit.com/r/homeassistant/comments/an3mys/what_is_your_overall_texttospeech_tts_strategy/
Best Lovelace cards for Docker: https://www.reddit.com/r/homeassistant/comments/bba6g6/best_lovelace_card_to_host_urls_to_other_docker/
Cool *simple* interface: https://www.reddit.com/r/homeassistant/comments/cyezhe/introducing_home_assistant_command_center_hacc_a/

#### Cool themes and configs
How to add theme: https://www.juanmtech.com/themes-in-home-assistant/
https://github.com/SilvrrGIT/HomeAssistant
https://github.com/ntalekt/homeassistant
https://github.com/stanvx/Home-Assistant-Configuration
https://github.com/gstevenson/ha-config
https://github.com/skalavala/smarthome
https://github.com/CCOSTAN/Home-AssistantConfig
https://github.com/CCOSTAN/Docker_Support
https://community.home-assistant.io/t/slate-a-new-dark-theme/86410/8
https://community.home-assistant.io/t/my-hass-io-and-lovelace-setup-updated/72902/2
https://github.com/renemarc/home-assistant-config
https://github.com/JoshuaGarrison27/Home-Assistant-Configuration
https://www.reddit.com/r/homeassistant/comments/bq3l7v/featurescomponents_in_home_assistant_you_wish/

### Influx
https://www.home-assistant.io/integrations/influxdb/

### Home Assistant sensors in InFluxdb
https://selfhostedhome.com/storing-home-assistant-sensor-data-in-influxdb/

### Viewing Grafana graphs in Home Assistant
https://community.home-assistant.io/t/complete-guide-on-setting-up-grafana-influxdb-with-home-assistant-using-official-docker-images/42860

### Android Apps - Home Assistant:
https://play.google.com/store/apps/details?id=com.keyboardcrumbs.haclient
https://www.smarthomebeginner.com/best-android-apps-for-home-assistant/

### Home Assistant JupyterLab:
https://data.home-assistant.ioouo/docs/quick_start_index

### Stateful automations
https://webworxshop.com/home-assistant-automation-in-depth-fusing-sensors-together-for-stateful-automations/?pk_campaign=reddit

## MQTT Sensors
### Espurna Integration
https://github.com/xoseperez/espurna/wiki/HomeAssistant

### Discussion on making a Homie component for Home Assistant.
https://github.com/marvinroger/homie-esp8266/issues/306

### Making a platform
https://developers.home-assistant.io/docs/en/creating_platform_code_review.html

### Generic platform discovery
https://developers.home-assistant.io/docs/en/creating_component_generic_discovery.html

### Netdisco discovery
https://developers.home-assistant.io/docs/en/creating_component_discovery.html

### How to have MQTT devices discovered:
home-assistant.io/docs/mqtt/discovery
Example of MQTT discovery: https://github.com/stelgenhof/AiLight/wiki/Home-Assistant-MQTT-Discovery

## Code examples of discovery

### HA_Homie repo. Checkout Dev branch!
https://github.com/nerdfirefighter/HA_Homie

### I had trouble using symlinks in www when remapped to /local/ in the browser.
https://github.com/home-assistant/home-assistant/issues/15778
https://github.com/home-assistant/home-assistant/pull/8413

#### The discovery component. Allows for devices supported by netdisco.
https://github.com/home-assistant/home-assistant/blob/39843a73de1b8e2a42be1e9300580726baecd18f/homeassistant/components/discovery.py
https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/discovery.py

#### MQTT component
https://github.com/home-assistant/home-assistant/blob/cd6544d32a094f727bf338c194830d94c1f24daa/homeassistant/components/mqtt/__init__.py
Documentation: https://www.home-assistant.io/docs/mqtt/discovery/

#### Discovery Helper
https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/helpers/discovery.py#L136

#### isy994 - Seems like a platform kinda like homie, just not over MQTT.
https://github.com/home-assistant/home-assistant/blob/b92350fb5588a05a870495753a0c0b3c69d12bd1/homeassistant/components/isy994.py

#### More examples:
https://github.com/home-assistant/home-assistant/blob/53f08e313fede1c3813fdfbb2765fd6a01786c6c/homeassistant/components/tado.py
https://github.com/home-assistant/home-assistant/blob/45eb611007d001abb6571ee8abf597fd91eceb13/homeassistant/components/hdmi_cec.py
https://github.com/home-assistant/home-assistant/blob/48af5116b34f1d19c5be2f913ae06831e871034f/homeassistant/components/media_player/mediaroom.py
https://github.com/home-assistant/home-assistant/blob/39843a73de1b8e2a42be1e9300580726baecd18f/homeassistant/components/xiaomi_aqara.py
https://github.com/home-assistant/home-assistant/blob/ea2ff6aae32821b8faaa7e5eb00efce779ebac73/homeassistant/components/velux.py

### Settings and examples for sensors:
https://www.home-assistant.io/components/sensor.mqtt/

### Setting icons and stuff
https://www.home-assistant.io/docs/configuration/customizing-devices/
https://materialdesignicons.com/
https://cdn.materialdesignicons.com/2.3.54/

### Log settings:
https://www.home-assistant.io/components/logger/

### Community Themes
https://github.com/maartenpaauw/home-assistant-community-themes
https://community.home-assistant.io/t/share-your-themes/22018

### How to pop up a dismissible notification.
https://www.home-assistant.io/components/persistent_notification/

### Data Entry flow?
https://developers.home-assistant.io/docs/en/data_entry_flow_index.html
https://github.com/home-assistant/home-assistant/commit/4d44c0feff03ddf1c0c57bd130cd1bdfa8c6621a
https://github.com/home-assistant/home-assistant/commit/534aa0e4b54b992ac55de0ae576276e94089ce49?diff=unified

### Lovelace
https://www.home-assistant.io/lovelace/

### Recorder
https://www.home-assistant.io/integrations/recorder/

### Plant card
https://www.home-assistant.io/lovelace/plant-status/

### Lovelace entity card documentation:
https://www.home-assistant.io/lovelace/entities/

### Custom Lovelace cards:
https://developers.home-assistant.io/docs/en/lovelace_custom_card.html

### Home Assistant Cookbook (Lots of examples):
https://www.home-assistant.io/cookbook/

### Custom Tiles:
https://community.home-assistant.io/t/custom-ui-tiles/29513/2

### Link more multiple Home Assistant instances together
https://www.reddit.com/r/homeassistant/comments/bci0aj/is_there_a_better_way_to_link_2_homeassistant/

### Docker Hub
https://hub.docker.com/r/homeassistant/home-assistant/
### Repo
https://github.com/home-assistant/home-assistant
### Dockerfile
https://github.com/home-assistant/home-assistant/blob/dev/Dockerfile
### Architecture repo
https://github.com/home-assistant/architecture/issues

### Image processing
https://www.home-assistant.io/components/image_processing/

### Coroutines were used in the MQTT start up.
http://dabeaz.com/coroutines/
https://stackoverflow.com/questions/9708902/in-practice-what-are-the-main-uses-for-the-new-yield-from-syntax-in-python-3

### Guides to setting up Home Assistant to listen to Homie
Has good example of using charts: https://thingsmatic.com/2017/02/07/home-assistant-getting-started-and-using-mqtt-sensors/
http://ratonland.org/post/17/
https://diyprojects.io/include-esp8266-dht22-homie-mqtt-iot-home-assistant-hass/

### MQTT cert stuff:
home-assistant.io/docs/mqtt/certificate

### How to setup https and external server:
home-assistant.io/components/http

### How to setup with Lets Encrypt:
home-assistant.io/docs/ecosystem/certificates/lets_encrypt

### Using scripts
https://www.home-assistant.io/components/script/
https://www.home-assistant.io/components/python_script/

### A smaller version of AllThing
https://github.com/mertenats/Open-Home-Automation

### Best camera for Home Assistant
https://www.reddit.com/r/homeassistant/comments/bnoi9x/best_camera_for_ha/
https://www.reddit.com/r/homeassistant/comments/dj8gxu/best_cameras_to_use_with_home_assistant/

### Some smart electric, water, and gas meters are unencrypted and can be monitored. Fort Collins encrypts their traffic, but offers an website/api you can use instead.
https://community.home-assistant.io/t/get-your-smart-electric-water-and-gas-meter-scm-readings-into-home-assistant-with-a-rtl-sdr/93707

### You can run Hass.io outside of their OS.
https://www.reddit.com/r/homeassistant/comments/ems5zb/home_assistant_without_hassio/

### How to read all the MQTT discovery messages. Subscribe to:
homeassistant/+/+/+/config