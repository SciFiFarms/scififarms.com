---
title: 'Dev Enviornment Variables'
taxonomy:
    category:
        - docs
---

- `DOMAIN=spencerslab.duckdns.org` - This env is used all over the place. Traefik uses $DOMAIN to generate the service URLs and tries to get TLS certificates through Lets Encrypt. There are also a number of services that use $DOMAIN to generate URLs for links within the service. 
- `LIVE_MOUNT_<SERVICE_NAME>_<MOUNT_DIR>ENABLED=true` to enable a mount used to present files from the given service to the host OS. Live mounts can usually be found at technocore/data/<SERVICE_NAME>. 
- 
- `DEV_MOUNT_<SERVICE_NAME>_<MOUNT_DIR>ENABLED=true` to enable a mount for the provided service that will aid in development. Mounted volumes can usually be found in technocore/services/<SERVICE_NAME>/<MOUNT_DIR>. 


- `STACK_NAME=technocore` - Allows you to set the swarm stack name. 
[//]:# ( Very helpful if you want to run multiple TechnoCore instance at once. )

[//]: # (- `EXTRA_DOMAINS=scifi.farm,scififarms.com,sciencefictionfarms.com,spencerslab.duckdns.org` - This is supported by NextCloud, but not really any other service. Multiple domains are not very well supported currently.)