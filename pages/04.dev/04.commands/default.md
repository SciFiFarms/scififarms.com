---
title: Commands
---

## Commands
- build 
- clean
- clean_service
- generate_gitmodules


#### create_secret $SERVICE_NAME $MOUNT_NAME $SECRET
Example: `./tc create_secret ingress admin_password this_is_a_password`


#### dps 
View ALL containers being ran. Is just running `docker ps` under the hood.  

Example: `./tc dps`
Example: `./tc dps -a` Includes containers that aren't running.

#### get_compose
This is mostly used for debugging. 

Example: `./tc get_compose`
