---
title: 'Troubleshooting TechnoCore'
---

## Troubleshooting
If you run into issues, there are a couple main places to look for clues. 
- If you know what service is failing, usually the best place to look is in the logs for the problimatic service: `./tc logs <SERVICE_NAME>`. 
- You can see what services are currently running, as well as the status by running `docker service ls`. This can sometimes help identify services that just aren't starting due to a configuration error.
- Occasionally there is a service that is failing before the can even start, and thus doesn't output any logs. In these situations monitoring the Docker service can be very helpufl. Run `journalctl -f -u docker` or `journalctl -r -u docker`. 