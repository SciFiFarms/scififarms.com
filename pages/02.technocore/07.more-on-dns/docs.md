---
title: 'More on DNS'
published: false
taxonomy:
    category:
        - docs
routable: true
visible: true
---

# THIS PAGE IS NOT VISIBLE

# Treafik/Ingress Environment Variables

By default, Traefik generates a self signed TLS certificate for the webpages it serves. This is OK in development, but means you're browser will complain about an untrusted certificate, and you'll have to manually override it everytime you re inititialize the stack. It's pretty easy to stop this from happening. Just create a DuckDNS (or alternative DNS provider) account and then run `./tc init` and add your credentials as prompted. 
[//]: # (This should include an explination on http & DNS varification. )

Eventually this won't be necessary, but for now you'll also have to modify the following env vars in your .env file:
- `ACME_TOKEN_ENV=DUCKDNS_TOKEN`  - This tells ACME to export the acme_token secret as $DUCKDNS_TOKEN. 
- `TRAEFIK_LETS_ENCRYPT_CHALLENGE="--acme.dnsChallenge.provider=duckdns "`


```
# DNS Settings
SERVICE_DDCLIENT=true
# Currently support: duckdns cloudflare
# But ddclient makes it trivial to add more. 
DNS_PROVIDER=duckdns
# Password/token for ddclient should be provided via the ./tc enter_secrets command.
#DNS_USERNAME=
```
- `MAINTAINER_EMAIL=your_email@example.com`  
    Let's Encrypt will send this address messages if it detects problems with the generated certificates. 
