---
title: 'Hashicorp''s Vault Links'
taxonomy:
    category:
        - docs
---

### Auto unsealing (is only free in the cloud). The transit seal might allow another vault server.
https://www.vaultproject.io/docs/configuration/seal/transit.html
https://learn.hashicorp.com/vault/day-one/autounseal-transit
https://www.hashicorp.com/resources/vault-1-0-how-to-auto-unseal-new-features
https://jaxenter.com/hashicorp-vault-1-1-highlights-157277.html

### Use Vault for random number generation and hashing
https://www.vaultproject.io/api/system/tools.html

### How to use Vault's API (From CURL):
https://www.vaultproject.io/api/index.html

### How to work with policies and configuration
https://www.hashicorp.com/blog/codifying-vault-policies-and-configuration

### Where go gets its CAs from. This is particularly important in getting rabbit-mq working.
https://golang.org/src/crypto/x509/root_linux.go

### Alternatives to Vault
https://github.com/OpenVPN/easy-rsa

### AppRole authentication for Vault
https://blog.alanthatcher.io/vault-approle-authentication/

### Write documentation:
vaultproject.io/docs/commands/write.html

### How to generate tokens:
vaultproject.io/api/auth/token/#role_name

### How to communicate with Vault in python:
github.com/ianunruh/hvac

### Good Vault setup guide (Intermediate CA):
cuddletech.com/?p=959


### Another guide to setting up vault with an intermediate CA (openssl gened):
blog.kintoandar.com/2015/11/vault-PKI-made-easy.html
### Setting up Vault with kuberneties:
blog.digitalocean.com/vault-and-kubernetes
### Yet another vault setup guide:
gist.github.com/chrishoffman/acc60cf577e1e79f56beb63747466d3c
### Less good guide for setting up Vault. It uses an intermediate CA, but from an openssl gen:
werner-dijkerman.nl/2017/08/25/automatically-generate-certificates-with-vault

### Docs on Vault PKI (Includes intermediate CA):
vaultproject.io/docs/secrets/pki/index.html

### More basic guide to setting up vault:
hackernoon.com/vault-as-ca-with-pki-backend-bbcfc315f06f

### Using TLS certs as an auth method:
vaultproject.io/docs/auth/cert.html

### Vault with postgres as the backend:
cloudacademy.com/blog/hashicorp-vault-how-to-secure-secrets-inside-microservices

### Vault/Consol high availability autopilot pattern:
github.com/autopilotpattern/vault

### Other PKI solutions:
ask.cronweekly.com/d/19-deploying-an-internal-ca-looking-for-advice

### CFSSL good example:
nomadproject.io/guides/securing-nomad.html

### Simple PKI - an alternative to vault creating certs?
https://www.reddit.com/r/selfhosted/comments/b9fn9y/simple_pki_a_bash_script_wrapper_for_openssl_that/

### Essential patterns of vault
https://www.reddit.com/r/devops/comments/cjlo6t/the_essential_patterns_of_vault_part_2/


---

Write documentation:
vaultproject.io/docs/commands/write.html

How to generate tokens:
vaultproject.io/api/auth/token/#role_name

How to communicate with Vault in python:
github.com/ianunruh/hvac

Use a secrets engine to generate RabbitMQ usernames and passwords:
vaultproject.io/docs/secrets/rabbitmq/index.html

RabbitMQ Secrets Engine API:
vaultproject.io/api/secret/rabbitmq/index.html

Good Vault setup guide (Intermediate CA):

cuddletech.com/?p=959

Another guide to setting up vault with an intermediate CA (openssl gened):
blog.kintoandar.com/2015/11/vault-PKI-made-easy.html

Setting up Vault with kuberneties:
blog.digitalocean.com/vault-and-kubernetes

Yet another vault setup guide:
gist.github.com/chrishoffman/acc60cf577e1e79f56beb63747466d3c

Less good guide for setting up Vault. It uses an intermediate CA, but from an openssl gen:
werner-dijkerman.nl/2017/08/25/automatically-generate-certificates-with-vault

Docs on Vault PKI (Includes intermediate CA):
vaultproject.io/docs/secrets/pki/index.html

More basic guide to setting up vault:
hackernoon.com/vault-as-ca-with-pki-backend-bbcfc315f06f

Using TLS certs as an auth method:
vaultproject.io/docs/auth/cert.html

Vault with postgres as the backend:
cloudacademy.com/blog/hashicorp-vault-how-to-secure-secrets-inside-microservices

Vault/Consol high availability autopilot pattern:
github.com/autopilotpattern/vault

There is a rabbitMQ Vault engine worth looking into:
vaultproject.io/docs/secrets/rabbitmq/index.html

Other PKI solutions:
ask.cronweekly.com/d/19-deploying-an-internal-ca-looking-for-advice

CFSSL good example:
nomadproject.io/guides/securing-nomad.html