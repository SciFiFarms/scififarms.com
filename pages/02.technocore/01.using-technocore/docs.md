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

1. A domain/DNS record for your TechnoCore instance. By default, TechnoCore assumes you're using DuckDNS. For other options, see the [development notes for Routing and DNS](/dev/routing-and-dns) page.
2. Operating System
   1. Linux - I'm running developing with Fedora and testing with Debian, Ubuntu, and CentOS.
   2. OS X - At one point, it was working with OS X. A lot has changed since then, and I'd expect some minor issues.
   3. Windows - Not currently supported, but there have been major changes to TechnoCore since I last tried. Checkout [#10](https://github.com/SciFiFarms/TechnoCore/issues/10) for more information.
   4. Pi - Would like to eventually support. [#8](https://github.com/SciFiFarms/TechnoCore/issues/8)
3. Git is installed. You can find instructions on installing git here: [Getting Started Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. Docker. If you don't already have this installed, you'll be prompted to install it when first running TechnoCore.

## Supported Services

By itself, TechnoCore doesn't do much; it really is only a device for creating and maintaining other Docker based services. The list of supported services can be found on the [Supported Services](../supported-services) page.

These services will be available through your web browser. The URL format is: `https://${SERVICE}.${DOMAIN}` (example: `https://home-assistant.scifi.farm`). Where ${DOMAIN} is the DOMAIN you entered in the .env and ${SERVICE} is the name of the service as listed under its [Supported Services](../supported-services) page.

!!! For a more in-depth look at how TechnoCore uses DNS to route traffic, take a look at the [development notes for Routing and DNS](/dev/routing-and-dns).

### Stacks

TechnoCore comes pre-configured with a couple of suggested stacks of software and configurations. These aren't well documented (yet!), but can be found in the [TechnoCore repo under the stacks folder](https://github.com/SciFiFarms/TechnoCore/tree/master/stacks). By default, TechnoCore launches the IoT/farm stack. This includes:

- Home Assistant
- Grafana & InfluxDB
- ESPHome
- VerneMQ (MQTT)
- Hashicorps Vault
- Syncthing

If you'd rather use another stack, for example the grav stack (its running these docs!), you can set it with:

```bash
# Alternatively, you could edit the .env file with a text editor or IDE (TechnoCore has some niceties built in for use with VS Code)
sed -i 's/^LOAD_ENV=.*/LOAD_ENV=grav.env/' .env
./tc deploy
```

# Getting Started

In order to make the initial set up as easy as possible, by default TechnoCore assumes you're using [DuckDNS](https://www.duckdns.org/) or [Cloudflare](https://dash.cloudflare.com/) as a DNS provider. You'll need 3 things:

1. An account with your desired provider. Register for one if you don't have one already.
2. A subdomain to access your TechnoCore instance on. If one doesn't already exist, you'll need to create it through your providers website.
3. A security token from the provider.

!!! TechnoCore can be configured to use other DNS providers and structures, but it'll be more complicated. For a more in-depth look at how TechnoCore uses DNS to route traffic, checkout the [development notes for Routing and DNS](/dev/routing-and-dns).

## DNS Records

- ### DuckDNS DNS Records

  The DOMAIN you'd like to use must already be registered to your DuckDNS account. If you haven't already, login and create a subdomain here: https://www.duckdns.org/

- ### Cloudflare DNS Records

  2 DNS records must exist: DOMAIN and *.DOMAIN. These must exist before TechnoCore/DDclient will be able to configure them.

## Security Tokens

- ### DuckDNS Security Token

  The security token can be found on the main page once you've logged in.

- ### Cloudflare Security Token

  The security token can be found under [My Profile > API Tokens](https://dash.cloudflare.com/profile/api-tokens). You'll need to use the Global API Key near the bottom of the page.

## Installation Commands

- Replace `<YOUR_DOMAIN_GOES_HERE>` with you actual domain. If you're using DuckDNS, this will look like technocore.duckdns.org where as with Cloudflare, this might look like technocore.scifi.farm.

  ```bash
  git clone https://github.com/SciFiFarms/TechnoCore technocore
  cd technocore
  cp example.env .env
  ```

- Set the DOMAIN variable

  ```bash
  sed -i 's/^DOMAIN=.*/DOMAIN=<YOUR_DOMAIN_GOES_HERE>/' .env
  ```

- Set the DNS_PROVIDER variable

  You only need to do this if you're using Cloudflare.

  ```bash
  sed -i 's/^DNS_PROVIDER=.*/DNS_PROVIDER=cloudflare' .env
  ```

- Enter the credentials needed to run TechnoCore

  ```bash
  ./tc enter_secrets
  ```

  !!! You can find [example output](#example-output-from-tc-enter-secrets) under the secrets section.

- Deploy TechnoCore

  ```bash
    ./tc deploy
  ```

- Confirm deployment success with `./tc dls` or `watch ./tc dls`

  ```bash
  watch ./tc dls
  ```

  Once the column under "REPLICAS" reads all "1/1"s, you'll be able to view your services from your web browser.

  To exit, type Ctrl+C


!!!! You can learn more about all the TechnoCore commands on the [TechnoCore: Commands](../commands) page.

---

## Environment Variables

TechnoCore relies **heavily** on shell environment variables. The idea is that **all** settings are configured in a .env file located at the root of the TechnoCore repo; the exception is that secrets are stored in Docker Swarm. The easiest way to get started is to copy the example.env files and then edit it to contain your values:

```bash
cp example.env .env
```

To learn more about how to use the .env file:

- Look at the documentation: [TechnoCore: Enviornment Variables](../env-vars)
- [dev.env](https://github.com/SciFiFarms/TechnoCore/blob/refactor/dev.env) has been commented with how to use each variable

## Secrets

While the goal is to put all configuration in that file, the reality is that secrets should not be stored in plain text, so in some cases, a secret will need to be manually added. Use the [enter_secrets command](../commands#enter-secrets): `./tc enter_secrets`; it will prompt you for the appropriate tokens or keys. Alternatively, you can checkout [Developing TechnoCore: Secrets](../../developing-technocore/secrets) for more information.

### Example output from `./tc enter_secrets`

After running the command, I've gon back and added # and a comment to places where I input values that didn't show in the output.

```bash
root@deb-init-test:/opt/technocore# ./tc enter_secrets
This will promt you for external credentials that are needed in order to run TechnoCore.
If you would like to skip a secret, leave the entered value empty and hit enter.

NOTE: With secrets, you won't see anything being entered. If you're unsure, you can
copy/paste the credentials in. If you do, be aware that the normal keyboard shortcut DO NOT WORK!
Instead, you can use CTRL+SHIFT+V, Right click -> paste, and sometimes middle click to paste.
You'll then need to press Enter to continue.
Please enter the dns_token for the ddclient service: # I entered a secret here as prompted.
Updated existing secret docs_ddclient_dns_token
Updating secret docs_ddclient_dns_token
Please enter the git_token for the grav service: # I hit enter here without typing anything first.
Nothing entered, leaving git_token unchanged.
Please enter the dns_token for the ingress service: # I entered a secret here as prompted.


Updated existing secret docs_ingress_dns_token
Updating secret docs_ingress_dns_token
ingress dns_user
Please enter the dns_user for the ingress service: tms@spencerslab.com

Updated existing secret docs_ingress_dns_user
Updating secret docs_ingress_dns_user
Please enter the smtp_password for the smtp_relay service: # I hit enter here without typing anything first.
Nothing entered, leaving smtp_password unchanged.
```

! This output will change depending on the choices for DNS provider and running services.

## Workflow

1. Make changes to the .env file at the root of the git repo
2. Save the .env file
3. Apply those changes using: `./tc deploy`
4. Confirm deployment success with `./tc dls` or `watch ./tc dls`

!!!! You can learn more about all the TechnoCore commands on the [TechnoCore: Commands](../commands) page.

Once the column under "REPLICAS" reads all "1/1"s, you'll be able to view your services from your web browser.

---

## Updating TechnoCore and Deployed Services

### Configuration Changes

To make changes to the running services and configuration:

- Edit the .env file

  I like to use VS Code or vim, but you should be able any text editor.

- Apply those changes using: `./tc deploy`

### Auto Updating

Additionally, TechnoCore comes with the ability to automatically update. By default it will check every 6 hours for updated Docker images and will pull them down and restart the service once detected. TechnoCore utilizes Ouroboros to do this, so if you'd like to know more, checkout the [Ouroboros page](../services/ouroboros).

### Disable Auto Updates

You can disable auto updates by adding the following line to your `.env` file.

```bash
SERVICE_OUROBOROS=
```

---

# Troubleshooting

If you have any trouble running TechnoCore, there are places to look, commands to run, and a list of known problems over on the [Troubleshooting TechnoCore](../troubleshooting-technocore) page.
