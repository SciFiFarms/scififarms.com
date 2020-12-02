---
title: 'Working with TechnoCore'
---

## General capabilities
At it's heart, TechnoCore is designed to make deploying, maintaining, and creating containers/services (and all the support infrastructure) running in Docker Swarm easy and secure. One of the draws for Docker Swarm is that it is easier to get started with than Kubernetes. The reality is that I found it easy to get started and get a proof of concept up and running, but to acutally have an application running in production with the flexibility to store secrects securely, change configuration, automatically update, monitor, test, and deploy repeatedly to be a serious technical lift. TechnoCore aims to automate all these tasks using a simple .env file and a handful of managment commands. The ultimate goal for TechnoCore is to support CI/CD pipelines and infastructure as code in Swarm stacks.

For those of you familair with other Docker technologies, using TechnoCore is similar to the way Kubernetes `kubectl` and Shift's `oc` command works. Another comparison would be Kubernetes Operators or Helm Charts, but for Swarm. 

Ultimately, TechnoCore is beging developed to enable the automation and running of Seedships in a vertical farm.

### Status
At this point, TechnoCore has been through a couple of rewrites already. The architecture is finally modular enough to be reasonably useable and the commands and conventions are defined in these docs. However, it's pretty clear that there are still some rough edges so there **will** be breaking changes yet to come. Most of these should be in how services are defined and the configuration generated. My plan is to try and keep the changes to env names/settings/flags minimal so that regular users/instances of TechnoCore should only need minimal work to upgrade from version to version. 

Currently TechnoCore relies upon the *latest* tag for it's own container as well as all of the deployable services. This is a bad pratice and will be addressed once a functional Seedship is up and running. 

TechnoCore strives to be platform agnostic. It does this by putting everything into containers. Infact, the `./technocore`(or `./tc` for short) script is simply a wrapper that passes the given arguments into the TechnoCore container itself. This means that it should currently support Linux and OSX. Windows and ARM will likely need some modfications made to TechnoCore to work. 

