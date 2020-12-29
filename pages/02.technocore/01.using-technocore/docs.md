---
title: 'Using TechnoCore'
taxonomy:
    category:
        - docs
visible: true
page-toc:
    active: true
---

# Prerequisites
1. A domain/DNS record for your TechnoCore instance. For more on how to set this up, checkout [Setting up DNS](#setting-up-dns)
2. Operating System
   1. Linux - I'm running developing with Fedora and testing with Debian, Ubuntu, and CentOS. 
   2. OS X - At one point, it was working with OS X. A lot has changed since then, and I'd expect some minor issues. 
   3. Windows - Not currently supported, but there have been major changes to TechnoCore since I last tried. Checkout [#10](https://github.com/SciFiFarms/TechnoCore/issues/10) for more information.
   4. Pi - Would like to eventually support. [#8](https://github.com/SciFiFarms/TechnoCore/issues/8)
3. Git is installed. You can find instructions on installing git here: [Getting Started Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. Docker. If you don't already have this installed, you'll be prompted to install it when first running TechnoCore.

# Getting Started
```
git pull https://github.com/SciFiFarms/TechnoCore technocore
cd technocore
cp example.env .env
# EDIT .env. I use VS Code or vim. You'll need to atleast update DOMAIN to match the domain your actually using. 
./tc enter_secrets
./tc deploy
```

## Environment Variables
TechnoCore relies **heavily** on shell environment variables. The idea is that **all** settings are configured in a .env file located at the root of the TechnoCore repo; the exception is that secrets are stored in Docker Swarm. The easiest way to get started is to copy the example.env files and then edit it to contain your values:
```
cp example.env .env
```
To learn more about how to use the .env file:
  -  Look at the documentation: [TechnoCore: Enviornment Variables](../env-vars)
  -  [dev.env](https://github.com/SciFiFarms/TechnoCore/blob/refactor/dev.env) has been commented with how to use each variable

While the goal is to put all configuration in that file, the reality is that secrets should not be stored in plain text, so in some cases, a secret will need to be manually added. Use the [enter_secrets command](../commands#enter-secrets): `./tc enter_secrets`; it will prompt you for the approprate tokens or keys. Alternatively, you can checkout [Developing TechnoCore: Secrets](../../developing-technocore/secrets) for more information.

## Workflow
1. Make changes to the .env file
2. Save the .env file
3. Apply those changes using: `./tc deploy`
4. Confirm deployment success with `./tc dls` or `watch ./tc dls`.   
The column under "REPLICAS" should all read 1/1. 

You can learn more about all the TechnoCore commands on the [TechnoCore: Commands](../commands) page.

## Supported Services
By itself, TechnoCore is pretty boring. It really is only a device for creating and maintaining other Docker based services. So once you've created your .env file and ran `./tc deploy`, you'll have the ability to visit https://${SERVICE}.${DOMAIN} (example: docs.scifi.farm) and get started working with the applications. For a list and descriptions of the services, checkout the [Supported Services](../supported-services) page.

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

### Configuration
There are a bunch of ways you can set this up and following are a couple of the most common. 
#### Internal Service
An example of this kind of set up is a home network where TechnoCore is running on a computer on your local network. In this configuration, 
You'll need a DNS record pointing to your to set it to the internal IP address of the computer you're running TechnoCore on. It should start with 192.#.#.#, 172.#.#.#, or 10.#.#.#. If you use the [ddclient service](../services/ddclient), it will pick this out and set it automatically. 
#### Public Service
An example of this kind of set up is this documentation. It has a VM running in a cloud that has a public IP and the DNS records point to that IP rather than an internal one. 

---

# Troubleshooting
If you have any trouble running TechnoCore, there are places to look, commands to run, and a list of known problems over on the [Troubleshooting TechnoCore](../troubleshooting-technocore) page. 
