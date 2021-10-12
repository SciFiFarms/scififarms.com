---
title: 'Routing and DNS'
taxonomy:
    category:
        - docs
---

## Setting up DNS
In order for traffic to be directed to TechnoCore, there has to be at least one DNS record pointing to that TechnoCore instance. This allows your browser and TechnoCore to route traffic to the appropriate service.

In TechnoCore, each service gets it's own subdomain, for example: **grafana**.tc.scifi.farm and **home-assistant**.tc.scifi.farm. Updating these records manually is troublesome, but doable. An easier way to manage TechnoCore's DNS is to use a wildcard record. It usually looks something like \*.tc.scifi.farm. This will direct **anything**.tc.scfi.farm to the IP of the wildcard record.

### Dynamic DNS Providers
TechnoCore is utilizing DDClient in order to support multiple DDNS providers, but it does require some configuration and TechnoCore only supports using a few providers, but can be easily expanded to use anything [supported by DDClient](https://github.com/ddclient/ddclient/blob/master/README.md).
For more about configuring DDClient, see [TechnoCore: DDClient](../services/ddclient).

#### Free Providers
  * [DuckDNS](https://www.duckdns.org/) - provides wildcard Dynamic DNS for up to 5 domains.

#### Paid Providers
  * [CloudFlare](https://www.cloudflare.com/) - if you already own a domain.
  !! Cloudflare offers finer grain control than Global API Token, but it hasn't been implemented in ddclient.

### Configuration
There are a bunch of ways you can set this up and following are a couple of the most common.
#### Internal Service
An example of this kind of set up is a home network where TechnoCore is running on a computer on your local network. In this configuration,
You'll need a DNS record pointing to your to set it to the internal IP address of the computer you're running TechnoCore on. It should start with 192.#.#.#, 172.#.#.#, or 10.#.#.#. If you use the [ddclient service](../services/ddclient), it will pick this out and set it automatically.
#### Public Service
An example of this kind of set up is this documentation. It has a VM running in a cloud that has a public IP and the DNS records point to that IP rather than an internal one.




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
