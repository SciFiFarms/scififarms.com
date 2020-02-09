---
title: 'Using TechnoCore'
visible: true
page-toc:
    active: true
---

# How to use TechnoCore
## General capabilities
At it's heart, TechnoCore is designed to make deploying, maintaining, and creating containers/services (and all the support infrastructure) running in Docker Swarm easy and secure. One of the draws for Docker Swarm is that it is easier to get started with than Kubernetes. The reality is that I found it easy to get started and get a proof of concept up and running, but to acutally have an application running in production with the flexibility to store secrects securely, change configuration, automatically update, monitor, test, and deploy repeatedly to be a serious technical lift. TechnoCore aims to automate all these tasks using a simple .env file and a handful of managment commands. The ultimate goal for TechnoCore is to support CI/CD pipelines and infastructure as code in Swarm stacks.

For those of you familair with other Docker technologies, using TechnoCore is similar to the way Kubernetes `kubectl` and Shift's `oc` command works. Another comparison would be Kubernetes Operators or Helm Charts, but for Swarm. 

Ultimately, TechnoCore is beging developed to enable the automation and running of Seedships in a vertical farm.

### Status
At this point, TechnoCore has been through a couple of rewrites already. The architecture is finally modular enough to be reasonably useable and the commands and conventions are defined in these docs. However, it's pretty clear that there are still some rough edges so there **will** be breaking changes yet to come. Most of these should be in how services are defined and the configuration generated. My plan is to try and keep the changes to env names/settings/flags minimal so that regular users/instances of TechnoCore should only need minimal work to upgrade from version to version. 

Currently TechnoCore relies upon the *latest* tag for it's own container as well as all of the deployable services. This is a bad pratice and will be addressed once a functional Seedship is up and running. 

TechnoCore strives to be platform agnostic. It does this by putting everything into containers. Infact, the `./technocore`(or `./tc` for short) script is simply a wrapper that passes the given arguments into the TechnoCore container itself. This means that it should currently support Linux and OSX. Windows and ARM will likely need some modfications made to TechnoCore to work. 

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

## Getting Started
```
git pull https://github.com/SciFiFarms/TechnoCore technocore
cd technocore
git checkout refactor
#cp <NEED TO CREATE THIS FILE> .env
<EDIT .env>
./tc deploy
```
## Environment Variables
TechnoCore relies **heavily** on shell environment variables. The idea is that **all** settings are configured in a .env file located at the root of the TechnoCore repo. The reality is that secrets should not be stored in plain text, so in some cases, a secret will need to be [input manually](create_secret). Below is the current general list of env vars that are settable. Each service will have additional specific envs that are listed in [Services currently supported](#services-currently-supported).

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

##### Treafik/DuckDNS envs
By default, Traefik generates a self signed TLS certificate for the webpages it serves. This is OK in development, but means you're browser will complain about an untrusted certificate, and you'll have to manually override it everytime you re inititialize the stack. In production setups, it really should be a trusted certificate.

[//]: # (This should include an explination on http & DNS varification. )

- `ACME_TOKEN_ENV=DUCKDNS_TOKEN`  - This tells ACME to export the acme_token secret as $DUCKDNS_TOKEN. 
- `TRAEFIK_LETS_ENCRYPT_CHALLENGE="--acme.dnsChallenge.provider=duckdns "`
- `TRAEFIK_DISABLE_BASIC_AUTH=true` - Some services don't come with any kind of authentication, which is **really** problematic when a service is exposed to the internet. Fortunantly Traefik provides a super simple auth mechinizium. However, this gets **very** annoying when doing development for those services. Setting this env disables that auth mechinisium. 
- `#DUCKNS_SUBDOMAIN=spencerslab` - I'm not sure this is actually used. 

To avoid storing secrets in plain text, you'll need to create a secret with your DuckDNS token in it.
- `./tc create_secret ingress acme_token <YOUR DuckDNS token>`

##### Email/SMTP envs
These aren't set up anywhere, so don't work. I'd just like to use them eventually. 

- `##UPSTREAM_SMTP_HOST should specify the hostname and port e.g. smtp.mailgun.org:587`
- `EMAIL=admin@spencerslab.com` 
- `UPSTREAM_SMTP_HOST=${UPSTREAM_SMTP_HOST:-smtp.scifi.farm:[PICK A PORT]}`
- `UPSTREAM_SMTP_USERNAME=${UPSTREAM_SMTP_USERNAME:-services@$REGISTERED_DOMAIN}`
- `UPSTREAM_SMTP_PASSWORD=examplePassword`
- `FROM_ADDRESS=${FROM_ADDRESS:-services@$REGISTERED_DOMAIN}`

---

## Commands
These are arguments to the `./technocore` or `./tc` call. 

### deploy
This takes the .env, generates a single compose.yaml, generates any needed secrets, and deploys the stack. 
    
Example: `./tc deploy`

### run_in $SERVICE_NAME $COMMAND TO RUN
This runs the given $COMMAND in the container for $SERVICE_NAME. 

Example: `./tc run_in $SERVICE_NAME bash` to debug or do some maintenence tasks. 

### logs $SERVICE_NAME
Follow the logs for $SERVICE_NAME. 

Example: `./tc logs ingress`

### create_secret $SERVICE_NAME $MOUNT_NAME $SECRET
Example: `./tc create_secret ingress admin_password this_is_a_password`

### get_compose
This is mostly used for debugging. 

Example: `./tc get_compose`

### get_secret $SERVICE_NAME $SECRET_NAME
Retrieve the $SECRET_NAME secret used in the $SERVICE_NAME service.
    
Example: `./tc get_secret ingress admin_password`

### restart $SERVICE_NAME
Restarts (using docker service update --force) the $SERVICE_NAME. 
    
Example: `./tc restart ingress` 

---

## Ansible/Terraform
I have experimented with deploying a TechnoCore instance to Hetzner Cloud using Terraform to provision a server and Ansible to harden the server, install Docker, and deploy the TechnoCore instance. It's pretty basic, but was used to initialize this website, along with a NextCloud instance and a MailCow instance. You can check it out [here](https://github.com/SciFiFarms/mail.scifi.farm). 

## Troubleshooting
If you run into issues, there are a couple main places to look for clues. 
- If you know what service is failing, usually the best place to look is in the logs for the problimatic service: `./tc logs <SERVICE_NAME>`. 
- You can see what services are currently running, as well as the status by running `docker service ls`. This can sometimes help identify services that just aren't starting due to a configuration error.
- Occasionally there is a service that is failing before the can even start, and thus doesn't output any logs. In these situations monitoring the Docker service can be very helpufl. Run `journalctl -f -u docker` or `journalctl -r -u docker`. 
