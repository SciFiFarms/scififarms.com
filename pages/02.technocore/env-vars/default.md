---
title: 'Env Vars'
---

[TOC]

#### Things to know about env vars
- You can disable an option by leaving the env variable blank: `<ENV_VAR>=`. *Any* non zero length value will evalute to true. Even `<ENV_VAR>=false`. I'd like to change this eventually. 
- Where you see <SERVICE_NAME> you should replace it with the desired service. It may be helpful to know that this path should exist: `services/<SERVICE_NAME>`. 

##### General env vars
- `SERVICE_<SERVICE_NAME>=true` to enable the <SERVICE_NAME> service. Alternatively, you can use `SERVICE_<SERVICE_NAME>=` to disable a given service. 
- `DOMAIN=spencerslab.duckdns.org` - This env is used all over the place. Traefik uses $DOMAIN to generate the service URLs and tries to get TLS certificates through Lets Encrypt. There are also a number of services that use $DOMAIN to generate URLs for links within the service. 
- `TZ=America/Denver` - See [this](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) list for the accepted timezone names.
- `DEFAULT_SERVICE=<SERVICE_NAME>`- This assigns a specific service to the root domain. For example `DEFAULT_SERVICE=grav` points spencerslab.com to the grav service. 
- `STACK_NAME=technocore` - Allows you to set the swarm stack name. Very helpful if you want to run multiple TechnoCore instance at once. 
- `#EXTRA_DOMAINS=scifi.farm,scififarms.com,sciencefictionfarms.com,spencerslab.duckdns.org` - This is supported by NextCloud, but not really any other service. Multiple domains are not very well supported currently.

### Services currently supported:
- Grafana
    - `SERVICE_GRAFANA=true`
- Prometheus
    - `SERVICE_PROMETHEUS=true`
- Fail2Ban
    - `SERVICE_FAIL2BAN=true`
- Ourboros
    - `SERVICE_OUROBOROS=true`
    - `DEV_MOUNT_OUROBOROS_SERVICES_ENABLED=true`
- Loki
    - `SERVICE_LOKI=true`
- NextCloud
    - `SERVICE_NEXTCLOUD=TRUE`
    - `SERVICE_NEXTCLOUD_ONLYOFFICE=TRUE`
    - `DEV_MOUNT_NEXTCLOUD_SHELL_MIGRATIONS_ENABLED=true`
- Grav 
    - `SERVICE_GRAV=true`
- Home Assistant
    - `SERVICE_HOME_ASSISTANT=true`
- VerneMQ
    - `SERVICE_VERNEMQ=true`
- ESPHome
    - `SERVICE_ESPHOME=true`
- Vault
    - `SERVICE_VAULT=true`
    - `DEV_MOUNT_VAULT_MIGRATIONS_ENABLED=true`
