---
title: Commands
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
