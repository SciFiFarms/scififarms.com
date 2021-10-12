---
title: 'What is TechnoCore'
taxonomy:
    category:
        - docs
---

## General capabilities
At it's heart, TechnoCore is designed to make deploying, maintaining, and creating containers/services (and all the support infrastructure) running in Docker Swarm easy and secure. One of the draws for Docker Swarm is that it is easier to get started with than Kubernetes. The reality is that I found it easy to get started and get a proof of concept up and running, but to actually have an application running in production with the flexibility to store secrets securely, change configuration, automatically update, monitor, test, and deploy repeatedly to be a serious technical lift. TechnoCore aims to automate all these tasks using a simple .env file and a handful of management commands. The ultimate goal for TechnoCore is to support CI/CD pipelines and infrastructure as code in Swarm stacks.

For those of you familiar with other Docker technologies, using TechnoCore is similar to the way Kubernetes `kubectl` and OpenShift's `oc` command works. Another comparison would be Kubernetes Operators or Helm Charts, but for Swarm. 

Ultimately, TechnoCore is beging developed to enable the automation and running of [Seedships](../seedships).

### Status
At this point, TechnoCore has been through a couple of rewrites already. The architecture is finally modular enough to be reasonably useable and the commands and conventions are defined in these docs. However, it's pretty clear that there are still some rough edges so there **will** be breaking changes yet to come. Most of these should be in how services are defined and the configuration generated. My plan is to try and keep the changes to env names/settings/flags minimal so that regular users/instances of TechnoCore should only need minimal work to upgrade from version to version.

Currently TechnoCore relies upon the *latest* tag for it's own container as well as all of the deployable services. This is a bad practice and will be addressed soon. 

TechnoCore strives to be platform agnostic. It does this by putting everything into containers. In fact, the `./technocore`(or `./tc` for short) script is simply a wrapper that passes the given arguments into the TechnoCore container itself. This means that while OSX, Windows and ARM devices aren't currently supported, I don't expect adding support to be overly difficult.

