---
title: 'Environment Variables'
taxonomy:
    category:
        - docs
---

TechnoCore uses a .env file that contains environment variables to enable and disable options and services. Where possible, TechnoCore uses sane defaults that only need to be set to true or [be unset](#things-to-know-about-env-vars).

# Configuring .env
The easiest way to get started is to `cp example.env .env` from the root of the technocore folder and then edit .env with your desired configuration. [example.env](https://github.com/SciFiFarms/TechnoCore/blob/master/example.env) contains everything you might need to set in order to start run TechnoCore, as well as descriptions of each value. 

## Things to know about env vars
- Where you see `<SERVICE_NAME>` in this documentation you should replace it with your desired service. 
!!!! `<SERVICE_NAME>` should match a folder that exist when calling `./tc ls` or returns output when calling `./tc ls -al | grep -w <SERVICE_NAME>`
- You can disable an option by leaving the env variable blank: `<ENV_VAR>=`. 
! *Any* non zero length value will evalute to true. Even `<ENV_VAR>=false`. 
- Secrets aren't env vars!
! You can run `./tc enter_secrets` to be prompted for secrets you need to provide TechnoCore. For more information, checkout [Using TechnoCore: Secrets](../using-technocore#secrets)
- Documentation for environment vars needed for development can be found in the [dev.env](https://github.com/SciFiFarms/TechnoCore/blob/master/stacks/dev.env) file, as well as at [Dev: Environment Variables](/dev/env-vars)

## Required Values
- `DOMAIN=tc.scifi.farm` - This env is the base for the URL of all of the services TechnoCore is running.  
    For example, with this DOMAIN set, you could access the Grafana service at grafana.tc.scifi.farm.  
    [//]: # ( More information on domains can be found at [TechnoCore: More on DNS](../more-on-dns) )  
- `TZ=America/Denver` - See [this](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) list for the accepted timezone names.

## Optional Values
- `SERVICE_<SERVICE_NAME>=true`  
    Enables the <SERVICE_NAME> service. Alternatively, you can use `SERVICE_<SERVICE_NAME>=` to disable a given service. 
- `DEFAULT_SERVICE=<SERVICE_NAME>`   
    This assigns a specific service to the root domain. For example `DEFAULT_SERVICE=grav` would point scifi.farm to the grav service and is thus a duplicate of grav.scifi.farm.
- `LOAD_ENV_<ENV_NAME>=<ENV_NAME>.env` OR `LOAD_ENV=<ENV_NAME>.env`  
     `LOAD_ENV_...` has to start with `LOAD_ENV`, but it doesn't matter what the end is. Everything with the `LOAD_ENV` prefix is loaded. 
     For more on `LOAD_ENV`, see [Premade .envs](#premade-envs) below. 
!!!! This is not a complete list of values. See [example.env](https://github.com/SciFiFarms/TechnoCore/blob/master/example.env) for all the options. 

## Premade .envs
In order to make configurations modular and shareable, you can load more .env files by using `LOAD_ENV*` variables. TechnoCore comes with a handful of \*.env files that contain the configuration needed to fullfil a specific purpose. For example, the services and configurations needed to run this website are loaded with `LOAD_ENV=docs.env`. 
!!! What you put in the .env will override any values already set in the LOAD_ENV_\* file, so you can think of settings brought in by LOAD_ENVs as defaults. This allows for flexibility in what parts of the  configuring you to add or remove services and options as needed.  

Below are a couple of useful .env files, but you can find all available .env files in the [TechnoCore GitHub repo](https://github.com/SciFiFarms/TechnoCore/tree/master/stacks).   
- [farm.env](https://github.com/SciFiFarms/TechnoCore/tree/master/stacks/farm.env)  
    This is what I'm using to run my SciFi Farm. It includes Grafana, ESPHome, Home Assistant, MQTT, and supporting services.   
- [grav.env](https://github.com/SciFiFarms/TechnoCore/tree/master/stacks/grav.env)  
    This documentation is running off of env file. It includes Grava and a few supporting services.  
- [dev.env](https://github.com/SciFiFarms/TechnoCore/tree/master/stacks/dev.env)
    Used for developing TechnoCore. For more information, see [Dev: Environment Variables](/dev/env-vars).


! If you want to load more than one defaults file, then you have to use unique LOAD_ENV_NAMES env vars.  If you have the same variable name, for example: 
! ```
! LOAD_ENV=dev.env
! LOAD_ENV=grav.env
! ```
! Then grav.env will override dev.env and only grav.env will be loaded. Instead, use something like:
! ```
! LOAD_ENV_DEV=dev.env
! LOAD_ENV_GRAV=grav.env
! ```

[//]: # ( TODO: Have this file displayed in page with https://github.com/anza/grav-plugin-filesource )
[//]: # ( # Example files: Could maybe mount the technocore folder read only?)