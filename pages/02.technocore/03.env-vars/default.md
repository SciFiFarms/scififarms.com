---
title: 'Environment Variables'
---

TechnoCore uses env vars (environment variables) to enable and disable services and options. It strives to use sain defaults that only need to be set to true or [be unset](#things-to-know-about-env-vars). They usually follow one of the following formats:
- `SERVICE_<SERVICE_NAME>=true` to enable the <SERVICE_NAME> service. Alternatively, you can use `SERVICE_<SERVICE_NAME>=` to disable a given service. 
- `DEV_MOUNT_<SERVICE_NAME>_<MOUNT_DIR>ENABLED=true` to enable a mount for the provided service that will aid in development. Mounted volumes can usually be found in technocore/services/<SERVICE_NAME>/<MOUNT_DIR>. 
- `LIVE_MOUNT_<SERVICE_NAME>_<MOUNT_DIR>ENABLED=true` to enable a mount used to present files from the given service to the host OS. Live mounts can usually be found at technocore/prod-data/<SERVICE_NAME>. 
- `DOMAIN=spencerslab.duckdns.org` - This env is used all over the place. Traefik uses $DOMAIN to generate the service URLs and tries to get TLS certificates through Lets Encrypt. There are also a number of services that use $DOMAIN to generate URLs for links within the service. 
- `TZ=America/Denver` - See [this](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) list for the accepted timezone names.
- `STACK_NAME=technocore` - Allows you to set the swarm stack name. 
[//]:# ( Very helpful if you want to run multiple TechnoCore instance at once. )

[//]: # (- `DEFAULT_SERVICE=<SERVICE_NAME>`- This assigns a specific service to the root domain. For example `DEFAULT_SERVICE=grav` points spencerslab.com to the grav service.)
[//]: # (- `EXTRA_DOMAINS=scifi.farm,scififarms.com,sciencefictionfarms.com,spencerslab.duckdns.org` - This is supported by NextCloud, but not really any other service. Multiple domains are not very well supported currently.)

## Things to know about env vars
- You can disable an option by leaving the env variable blank: `<ENV_VAR>=`. *Any* non zero length value will evalute to true. Even `<ENV_VAR>=false`. I'd like to change this eventually. 
- Where you see <SERVICE_NAME> you should replace it with the desired service. It may be helpful to know that the service should also be a folder that exist when calling `./tc ls services/`.

# Example files:
The best way to see how to use the .env file is by looking the example \*.env files in the TechnoCore repo. The most complete example is [dev.env](https://github.com/SciFiFarms/TechnoCore/blob/refactor/dev.env). It contains settings to run and develop all the currently supported services, as well as experimental services that have been commented out. 
[//]: # ( TODO: Have this file displayed in page with https://github.com/anza/grav-plugin-filesource)


# Treafik/Ingress Environment Variables

By default, Traefik generates a self signed TLS certificate for the webpages it serves. This is OK in development, but means you're browser will complain about an untrusted certificate, and you'll have to manually override it everytime you re inititialize the stack. It's pretty easy to stop this from happening. Just create a DuckDNS (or alternative DNS provider) account and then run `./tc init` and add your credentials as prompted. 
[//]: # (This should include an explination on http & DNS varification. )

Eventually this won't be necessary, but for now you'll also have to modify the following env vars in your .env file:
- `ACME_TOKEN_ENV=DUCKDNS_TOKEN`  - This tells ACME to export the acme_token secret as $DUCKDNS_TOKEN. 
- `TRAEFIK_LETS_ENCRYPT_CHALLENGE="--acme.dnsChallenge.provider=duckdns "`