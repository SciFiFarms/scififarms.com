---
title: 'Traefik Links'
taxonomy:
    category:
        - docs
---

# Service Information
  In order to provide a trusted connection to TechnoCore, I've utilized [DuckDNS.org](https://www.duckdns.org/) and [LetsEncrypt](https://letsencrypt.org/) to generate trusted TLS certificates. 
  You'll need to provide your DuckDNS token and domain as part of the installation. DuckDNS allows you to login using GitHub, Reddit, Google, or Twitter accounts, so you shouldn't need to create a new account. 
  
## Docker image
https://hub.docker.com/_/traefik?tab=description
https://github.com/containous/traefik-library-image/blob/8c0a8508ea75d5a491abadb7fc5bfa33b2beb3d7/scratch/amd64/Dockerfile

# Documentation
## Getting Started
https://docs.traefik.io/basics/

## Docker backend settings
https://docs.traefik.io/configuration/backends/docker/

### Wildcard domains
https://docs.traefik.io/configuration/acme/#wildcard-domains

### Traefik simple SSO
https://www.reddit.com/r/selfhosted/comments/f1mf54/sti_simple_traefik_identity_super_configurable/

### You can define what fields are reported to the access-log
https://docs.traefik.io/configuration/logs/#access-logs

### Sometimes order seems to matter in the run flags.
https://www.reddit.com/r/Traefik/comments/avt1ut/issues_enabling_logs/

### Different format for cli vs compose
https://docs.traefik.io/v1.6/configuration/entrypoints/#cli

### List of LetsEncrypt DNS verification providers
https://docs.traefik.io/https/acme/#providers

### Use https://whatever@traefik.your.domain to log out of Traefik
https://superuser.com/questions/181547/firefox-quickly-forget-http-basic-auth

### DigitalOcean ACME settings:
https://go-acme.github.io/lego/dns/digitalocean/

### Cli, env, labels, and file settings... All of them.
https://docs.traefik.io/reference/static-configuration/cli/
https://docs.traefik.io/reference/static-configuration/env/
https://docs.traefik.io/reference/dynamic-configuration/docker/
https://docs.traefik.io/reference/static-configuration/file/
---

### Adding auth middleware
https://itnext.io/how-to-implement-a-sso-middleware-for-traefik-v2-on-kubernetes-dcd9d45cc875
https://github.com/8gears/Traefik-with-Pomerium-Forward-Auth-and-Proxy-on-Kubernetes-with-Helm

### Pretty comprehensive guide to using Traefik V2
https://www.smarthomebeginner.com/traefik-2-docker-tutorial/

## Converting from v1 to v2
### Guide
https://docs.traefik.io/migration/v1-to-v2/
https://offby2.com/posts/002-introduction-to-traefik-v2-with-docker/
https://blog.containo.us/traefik-2-0-docker-101-fc2893944b9d#49a5
https://devclass.com/2019/09/17/traefik-reverse-proxy-celebrates-2-0-release-with-tcp-support/
https://mwunderling.com/blog/traefik2.html

### Decent examples
https://github.com/gkoerk/docker-swarm-cookbook/blob/master/traefik/traefik.yml

### Use a router 
https://docs.traefik.io/routing/routers/
https://docs.traefik.io/v2.0/routing/services/
https://docs.traefik.io/routing/providers/docker/
https://docs.traefik.io/user-guides/docker-compose/acme-tls/

### Entrypoint
https://docs.traefik.io/routing/entrypoints/

### Basic Auth
https://docs.traefik.io/v2.0/middlewares/basicauth/

### HTTPS
https://docs.traefik.io/v2.0/https/acme/
https://docs.traefik.io/user-guides/docker-compose/acme-http/
Good example of how to do http->https forwarding: https://webworxshop.com/internal-https-with-lets-encrypt-linode-dns-and-traefik/

### Issue with Home Assistant and WebSockets:
https://github.com/containous/traefik/issues/5533
https://community.containo.us/t/websockets-not-working-after-migrating-to-traefik-2-0/1912
https://stackoverflow.com/questions/11768221/firefox-websocket-security-issue/11770124

---

### Best guide on running Traefik in Swarm
https://dockerswarm.rocks/traefik/
https://medium.com/@tiangolo/docker-swarm-mode-and-traefik-for-a-https-cluster-20328dba6232
https://blog.sixeyed.com/arming-a-hybrid-docker-swarm-part-4-reverse-proxying-with-traefik/

### Using Traefik with DuckDNS
https://github.com/KnicKnic/traefik_duckdns

### Traefik and MDNS
https://gitlab.com/viraptor/docker_mdns

### How to run Traefik and Fail2ban together
https://github.com/crazy-max/docker-fail2ban/tree/master/examples/jails/traefik

### DuckDNS does NOT work well when using subdomains
Only one txt file, and I think each subdomain clobers the previous
https://github.com/lukas2511/dehydrated/issues/594

### Secure dashboard with password
https://medium.com/@xavier.priour/secure-traefik-dashboard-with-https-and-password-in-docker-5b657e2aa15f

### Forwarding auth is supported
https://github.com/containous/traefik/issues/391
https://github.com/containous/traefik/pull/3559

### Idea for how to do LDAP (with NGINX) and still use Traefik
https://github.com/containous/traefik/issues/498
https://github.com/containous/traefik/issues/593


