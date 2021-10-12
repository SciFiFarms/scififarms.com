---
title: 'Developing TechnoCore'
visible: true
---

### Methodology
TechnoCore takes a page out of the Ruby on Rails book and operates on the principle of convention over configuration. 
Seperate Repos

# How to develop with Technocore
    
- PROD vs dev
- repo-template
- compose.yml
- defaults.sh
- secrets.sh
- Migrations & dogfish
- Goinit and entrypoints
- Docker images - auto built & updated
- init.sh
- VS Code workspace
- Troubleshooting

`<SERVICE_NAME>` should match the folder name in services/.

##### Envs to aid in development 

- `TAG=latest` - This gets passed into pretty much all the scripts that work with images to pick which version to use. For production I use latest, but when developing, I use `TAG=local`.

- `TECHNOCORE_ADMIN_PASSWORD=secretpasswordyo1` - By default, TechnoCore generates a different password for each service that needs an admin_password. This **really** gets in the way when developing a service because then each time the stack is recreated, I have to call `./tc get_secret <SERVICE_NAME>`. If you set this env, it will override that behavior and set all admin passwords to the value of TECHNOCORE_ADMIN_PASSWORD.
- `ADMIN_USER=admin` 

- `TRAEFIK_DISABLE_BASIC_AUTH=true` 

- Some services don't come with any kind of authentication, which is **really** problematic when a service is exposed to the internet. Fortunantly Traefik provides a super simple auth mechinizium. However, this gets **very** annoying when doing development for those services. Setting this env disables that auth mechinisium. 

- `TRAEFIK_ACME_CASERVER="--acme.caServer=https://acme-staging-v02.api.letsencrypt.org/directory"` 

- `DEV_MOUNT_<SERVICE_NAME>_<FOLDER_NAME>_ENABLED=true` 

- DEV_MOUNTs are preconfigured volume mounts that allow a single flag to enable mounting a folder from within the services/<SERVICE_NAME>/<FOLDER_NAME> directory into the container. Currently there aren't very many of these, but as I need to make more changes, I'll be adding more of these.

- `PROD=true` 

- When PROD=true, TechnoCore will work with files located within the TechnoCore container itself. If `PROD=`, then the ./services/ and ./lib/ folders are passed into the TechnoCore container. This allows TechnoCore to pull in changes to services without having to rebuild the TechnoCore container itself.

- `INGRESS_TYPE="subdomain"` 

- Originally this would allow one to pick between <SERVICE_NAME>.<DOMAIN> and <DOMAIN>/<SERVICE_NAME>. But experience showed me that <SERVICE_NAME>.<DOMAIN> is almost always a better choice, so this env will likely be removed. 

- `image_provider=scififarms`

- `SERVICE_TRAEFIK_SUBDOMAIN=` - Prevents Traefik from running by default.

### Methodology
TechnoCore takes a page out of the Ruby on Rails book and operates on the principle of convention over configuration. 
Seperate Repos