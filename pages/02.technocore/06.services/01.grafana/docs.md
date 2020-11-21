---
title: Grafana
taxonomy:
    category:
        - docs
---

# Service Information

[Grafana's Documentation](https://grafana.com/docs/grafana/latest/)  
[Docker Hub](https://hub.docker.com/r/grafana/grafana/tags)  
[Dockerfile](https://github.com/grafana/grafana/blob/master/Dockerfile)  
[Hass.io add-on: Grafana](https://github.com/hassio-addons/addon-grafana/tree/v2.1.0/grafana)

# Configuration
https://grafana.com/docs/installation/configuration/  

## SMTP Settings
https://grafana.com/docs/installation/configuration/#smtp  
https://dzone.com/articles/grafana-alerting-and-email-notifications  

## Alerting
https://grafana.com/docs/alerting/rules/#alerting-engine-rules-guide  
https://medium.com/@rdavix/how-to-export-alerts-from-prometheus-to-grafana-8f1de059a8c8  
https://sysdig.com/blog/kubernetes-monitoring-with-prometheus-alertmanager-grafana-pushgateway-part-2/  
https://github.com/scylladb/scylla-monitoring/wiki/Alerts  

## Provisioning - Initial connections and other objects
https://grafana.com/docs/administration/provisioning/  
Datasources: https://grafana.com/docs/administration/provisioning/#datasources  
Postgres: https://grafana.com/docs/features/datasources/postgres/  

## Datasources (Used for [provisioning](https://grafana.com/docs/administration/provisioning/#datasources))

- [InfluxDB](https://grafana.com/docs/features/datasources/influxdb/)
- [Prometheus](https://grafana.com/docs/features/datasources/prometheus/)

---
# Tips I needed
Set a specific dashboard as home page: https://stackoverflow.com/questions/48164754/how-to-set-a-dashboards-on-grafana-home-page  
Use $tag_whatever to alias labels in graph: https://stackoverflow.com/questions/42397891/how-to-use-a-influxdb-tag-value-in-a-grafana-legend  
https://github.com/grafana/grafana/issues/525  
Using WHERE LIKE (=~): https://cmikavac.net/2018/03/30/how-to-use-where-like-clause-in-influxdb/  
How to install plugins via env: https://grafana.com/docs/grafana/latest/installation/docker/  

---

# Dashboards

## Home Assistant
https://community.home-assistant.io/t/home-assistant-community-add-on-grafana/54674  

## Traefik
https://grafana.com/grafana/dashboards/10479  

## Prometheus
https://www.digitalocean.com/community/tutorials/how-to-add-a-prometheus-dashboard-to-grafana  

## Nextcloud
https://grafana.com/dashboards/9632

## VerneMQ
https://github.com/vernemq/vernemq/blob/master/metrics_scripts/grafana/VerneMQ%20Node%20Metrics.json

## node-exporter and cadvisor
https://grafana.com/dashboards/893

## node-exporter
https://grafana.com/dashboards/6490

## SNMP
Best looking one, would need some work: https://grafana.com/grafana/dashboards/950
https://grafana.com/dashboards?dataSource=prometheus&search=snmp

## OpenWrt
https://grafana.com/grafana/dashboards/11858

## Fail2ban 
https://github.com/jangrewe/prometheus-fail2ban-exporter
https://grafana.com/grafana/dashboards/9629

## Ouroboros
https://github.com/pyouroboros/ouroboros/wiki/Grafana

## Influx Admin: seemed like process management
https://grafana.com/grafana/plugins/natel-influx-admin-panel

---

# MQTT with Grafana
MQTT in Grafana: https://community.hiveeyes.org/t/using-grafana-for-submitting-downlink-commands/2959/5  
Grafana as an IoT Dashboard: https://medium.com/worldsensing-techblog/build-your-iot-frontend-with-grafana-36b1113d7d4b  
Grafana Plugin: Browser Based MQTT: https://github.com/geeks-r-us/mqtt-panel  
Other MQTT/Button Research: https://community.grafana.com/t/mqtt-button-plugin/771  

---