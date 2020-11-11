---
title: 'Using TechnoCore'
taxonomy:
    category:
        - docs
visible: true
page-toc:
    active: true
---

## Getting Started
```
git pull https://github.com/SciFiFarms/TechnoCore technocore
cd technocore
git checkout refactor
ln -s dev.env .env
./tc deploy
./tc init
```

## Environment Variables
TechnoCore relies **heavily** on shell environment variables. The idea is that **all** settings are configured in a .env file located at the root of the TechnoCore repo. The reality is that secrets should not be stored in plain text, so in some cases, a secret will need to be manually added. Use the `./tc init` command to do so, or checkout [Developing TechnoCore: Secrets](developing-technocore/secrets)

Below is the current general list of env vars that are settable. Each service will have additional specific envs that are listed in [Services currently supported](#services-currently-supported).

##### Treafik/DuckDNS envs
By default, Traefik generates a self signed TLS certificate for the webpages it serves. This is OK in development, but means you're browser will complain about an untrusted certificate, and you'll have to manually override it everytime you re inititialize the stack. In production setups, it really should be a trusted certificate.

[//]: # (This should include an explination on http & DNS varification. )

- `ACME_TOKEN_ENV=DUCKDNS_TOKEN`  - This tells ACME to export the acme_token secret as $DUCKDNS_TOKEN. 
- `TRAEFIK_LETS_ENCRYPT_CHALLENGE="--acme.dnsChallenge.provider=duckdns "`
- `TRAEFIK_DISABLE_BASIC_AUTH=true` - Some services don't come with any kind of authentication, which is **really** problematic when a service is exposed to the internet. Fortunantly Traefik provides a super simple auth mechinizium. However, this gets **very** annoying when doing development for those services. Setting this env disables that auth mechinisium. 
- `#DUCKNS_SUBDOMAIN=spencerslab` - I'm not sure this is actually used. 

To avoid storing secrets in plain text, you'll need to create a secret with your DuckDNS token in it.
- `./tc create_secret ingress acme_token <YOUR DuckDNS token>`

---

## Troubleshooting
If you have any trouble running TechnoCore, there are places to look, commands to run, and a list of known problems over on the [Troubleshooting TechnoCore](../troubleshooting-technocore) page. 
