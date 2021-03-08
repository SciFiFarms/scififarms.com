---
title: 'Flashing Tuya Devices (Make more friendly?)'
---

## Setting up the Tuya flasher
1. Get Pi
2. Download etcher: https://www.balena.io/etcher/
3. Download Buster: 
4. Write SD Card
5. Add /boot/ssh
6. Boot pi
7. SSH in, change PW and hostname: sudo raspi-config
8. Set up tuya-convert: https://github.com/ct-Open-Source/tuya-convert#procedure
9. 

## How to flash a Tuya device
1. Download firmware for a generic ESPHOME device. I use [empty.yaml]()
    This shouldn't have anything but the minimum any device will need to connect to the network. 
    a. WiFi credentials
    b. GUI to flash full device configuration
2. Copy firmware to tuya-converter
   `scp generic.bin pi@tuya-convert:/home/pi/tuya-convert/files`
3. Start Tuya Convert 
```
ssh pi@tuya-convert
cd tuya-convert
./start_flash.sh
Stop dnsmasq, mqtt
```
4. Connect phone to network. 
4. Flash device with generic firmware
   
5. Flash the device with full firmware 
    There are two methods for flashing these: 
    a. Via GUI
    b. Via CLI
        `ln -s templates/sp20.yaml sp20_02.yaml && esphome sp20_02.yaml run --upload-port generic.spencerslab.com`
        ```
        ./tc run_in esphome_app ln -s templates/ss30/unbranded-seedship-shoot-zone-power.yaml ss_03_power_shoot_zone.yaml
            
        ```
6. Confirm addition by looking for it in Home Assistant
    By default, these will be added to the interface automatically. However, if you modify the interface AT ALL, it'll actually show up in the unused entities list. 
