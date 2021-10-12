---
title: Commands
published: true
taxonomy:
    category:
        - docs
---

These are arguments to the `./technocore` or `./tc` call. They should be made from the root of the technocore directory. 

# Commands
## deploy
This takes the .env, generates a single compose.yaml, generates any needed secrets, and deploys the stack. 
    
Example: `./tc deploy`

## enter_secrets
Scans the configuration for needed user-provided credentials, securely prompts (input not displayed) the user for them, and finally saves the credientals. 

Example: `./tc enter_secrets` 

## get_secret $SERVICE_NAME $MOUNT_NAME
Retrieve the $MOUNT_NAME secret used in the $SERVICE_NAME service.
    
Example: `./tc get_secret ingress admin_password`

## logs $SERVICE_NAME
Follow the logs for $SERVICE_NAME. 

Example: `./tc logs grafana`  
Example: `./tc logs ingress`

## restart $SERVICE_NAME
Restarts the Docker service for $SERVICE_NAME. 

Wrapper for `docker service update --force $SERVICE_NAME`
    
Example: `./tc restart ingress`  
Example: `./tc restart grafana` 

## run_in $SERVICE_NAME $COMMAND TO RUN
This runs the given $COMMAND in the container for $SERVICE_NAME. 

Example: `./tc run_in $SERVICE_NAME bash` to debug or do some maintenance tasks. 

## docker-ls
### Alias: dls
This lists all the running services. 
Wrapper for `docker service ls`.

Example: `./tc docker-ls`  
Example: `./tc dls`  
Example: `watch ./tc dls`

## watch 'some command goes here'
It'll repeatedly (every 2 seconds by default) run the command and update the output. Ctrl+C to exit. 
Note: Don't use `./tc watch $SOME_COMMAND` because you won't be able to Ctrl+C to exit. 

Example: `watch ./tc dls`

## stop
This stops your stack from running in Swarm. Redeploy with `./tc deploy`  
Wrapper for `docker stack rm $STACK_NAME`

Example: `'/tc stop`

## uninstall
Removes Docker stack and all references to it from the secrets and volumes. THIS WILL DELETE DATA
    
Example: `./tc unistall` 

# Development Commands
Commands used primarily for the development of TechnoCore and supported services can be found under [Developing Technocore: Commands](../../developing-technocore/commands)