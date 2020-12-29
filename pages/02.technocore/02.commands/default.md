---
title: Commands
published: true
---

These are arguments to the `./technocore` or `./tc` call. 

#### deploy
This takes the .env, generates a single compose.yaml, generates any needed secrets, and deploys the stack. 
    
Example: `./tc deploy`

#### run_in $SERVICE_NAME $COMMAND TO RUN
This runs the given $COMMAND in the container for $SERVICE_NAME. 

Example: `./tc run_in $SERVICE_NAME bash` to debug or do some maintenance tasks. 

#### logs $SERVICE_NAME
Follow the logs for $SERVICE_NAME. 

Example: `./tc logs grafana` or `./tc logs ingress`

#### enter_secrets
Scans the configuration for needed user-provided credentials, securely prompts (input not displayed) the user for them, and finally saves the credientals. 

Example: `./tc enter_secrets` 


#### create_secret $SERVICE_NAME $MOUNT_NAME $SECRET
Example: `./tc create_secret ingress admin_password this_is_a_password`

### get_secret $SERVICE_NAME $MOUNT_NAME
Retrieve the $MOUNT_NAME secret used in the $SERVICE_NAME service.
    
Example: `./tc get_secret ingress admin_password`

#### restart $SERVICE_NAME
Restarts (using docker service update --force) the $SERVICE_NAME. 
    
Example: `./tc restart ingress` 

## Other useful commands
These are commands that are helpful in running TechnoCore

#### watch 'some command goes here'
It'll repeatedly (every 2 seconds by default) run the command and update the output. 

Example: `watch docker service ls`
Example: `watch 'docker ps | grep home-assistant'`

#### docker service ls
This lists all the running services. 
Warning: This is often less _??
Example: `docker service ls`

#### docker ps
View ALL containers being ran. 
Example: `docker ps`
Example: `docker ps -a` Includes containers that aren't running.

#### docker stack rm $STACK_NAME
Removes the entire stack from running in Swarm. 
Example: `docker ps`

## Development Commands
Commands used primarily for the development of TechnoCore and supported services can be found under [Developing Technocore: Commands](../../developing-technocore/commands)