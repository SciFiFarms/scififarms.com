---
title: 'Using TechnoCore'
taxonomy:
    category:
        - docs
visible: true
page-toc:
    active: true
---


## General capabilities
At it's heart, TechnoCore is designed to make deploying, maintaining, and creating containers/services (and all the support infrastructure) running in Docker Swarm easy and secure. One of the draws for Docker Swarm is that it is easier to get started with than Kubernetes. The reality is that I found it easy to get started and get a proof of concept up and running, but to acutally have an application running in production with the flexibility to store secrects securely, change configuration, automatically update, monitor, test, and deploy repeatedly to be a serious technical lift. TechnoCore aims to automate all these tasks using a simple .env file and a handful of managment commands. The ultimate goal for TechnoCore is to support CI/CD pipelines and infastructure as code in Swarm stacks.

For those of you familair with other Docker technologies, using TechnoCore is similar to the way Kubernetes `kubectl` and Shift's `oc` command works. Another comparison would be Kubernetes Operators or Helm Charts, but for Swarm. 

Ultimately, TechnoCore is beging developed to enable the automation and running of Seedships in a vertical farm.

### Status
At this point, TechnoCore has been through a couple of rewrites already. The architecture is finally modular enough to be reasonably useable and the commands and conventions are defined in these docs. However, it's pretty clear that there are still some rough edges so there **will** be breaking changes yet to come. Most of these should be in how services are defined and the configuration generated. My plan is to try and keep the changes to env names/settings/flags minimal so that regular users/instances of TechnoCore should only need minimal work to upgrade from version to version. 

Currently TechnoCore relies upon the *latest* tag for it's own container as well as all of the deployable services. This is a bad pratice and will be addressed once a functional Seedship is up and running. 

TechnoCore strives to be platform agnostic. It does this by putting everything into containers. Infact, the `./technocore`(or `./tc` for short) script is simply a wrapper that passes the given arguments into the TechnoCore container itself. This means that it should currently support Linux and OSX. Windows and ARM will likely need some modfications made to TechnoCore to work. 


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
TechnoCore relies **heavily** on shell environment variables. The idea is that **all** settings are configured in a .env file located at the root of the TechnoCore repo. The reality is that secrets should not be stored in plain text, so in some cases, a secret will need to be [input manually](create_secret). Below is the current general list of env vars that are settable. Each service will have additional specific envs that are listed in [Services currently supported](#services-currently-supported).

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
