---
title: 'Grafana: Dev Notes'
taxonomy:
    category:
        - docs
---

# Overview
## Service Information
[TechnoCore: Grafana Git Repo]()
[TechnoCore: Grafana Docker Hub Repo]()
[Docker Hub](https://hub.docker.com/r/grafana/grafana/tags)  
[Dockerfile](https://github.com/grafana/grafana/blob/master/Dockerfile)  

## Related Documentation
[Seedships: Grafana]()
[TechnoCore: Grafana]()

---

# Configuration
https://grafana.com/docs/installation/configuration/  

## SMTP Settings
https://grafana.com/docs/installation/configuration/#smtp  
https://dzone.com/articles/grafana-alerting-and-email-notifications  

## Provisioning - Initial connections and other objects
https://grafana.com/docs/administration/provisioning/  
Datasources: https://grafana.com/docs/administration/provisioning/#datasources  
Postgres: https://grafana.com/docs/features/datasources/postgres/  

## Datasources (Used for [provisioning](https://grafana.com/docs/administration/provisioning/#datasources))
- [InfluxDB](https://grafana.com/docs/features/datasources/influxdb/)  
- [Prometheus](https://grafana.com/docs/features/datasources/prometheus/)  

---

# Lessons Learned
Set a specific dashboard as home page: https://stackoverflow.com/questions/48164754/how-to-set-a-dashboards-on-grafana-home-page  
Use $tag_whatever to alias labels in graph: https://stackoverflow.com/questions/42397891/how-to-use-a-influxdb-tag-value-in-a-grafana-legend  
https://github.com/grafana/grafana/issues/525  
Using WHERE LIKE (=~): https://cmikavac.net/2018/03/30/how-to-use-where-like-clause-in-influxdb/  
How to install plugins via env: https://grafana.com/docs/grafana/latest/installation/docker/  

---

# MQTT with Grafana
MQTT in Grafana: https://community.hiveeyes.org/t/using-grafana-for-submitting-downlink-commands/2959/5  
Grafana as an IoT Dashboard: https://medium.com/worldsensing-techblog/build-your-iot-frontend-with-grafana-36b1113d7d4b  
Grafana Plugin: Browser Based MQTT: https://github.com/geeks-r-us/mqtt-panel  
Other MQTT/Button Research: https://community.grafana.com/t/mqtt-button-plugin/771  