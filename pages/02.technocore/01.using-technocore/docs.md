---
title: 'Using TechnoCore'
taxonomy:
    category:
        - docs
visible: true
page-toc:
    active: true
---

# Getting Started
```
git pull https://github.com/SciFiFarms/TechnoCore technocore
cd technocore
git checkout refactor
ln -s dev.env .env
echo "<YOUR_DOMAIN>" > .domain
./tc deploy
./tc init
```

## Environment Variables
TechnoCore relies **heavily** on shell environment variables. The idea is that **all** settings are configured in a .env file located at the root of the TechnoCore repo. The easiest way to get started is to link or clone one of the existing .env files and work off of that:
```
ln -s dev.env .env
OR
cp farm.env .env
```
To learn more about how to use the .env file:
  -  Look at the documentation: [TechnoCore: Enviornment Variables](../env-vars)
  -  [dev.env](https://github.com/SciFiFarms/TechnoCore/blob/refactor/dev.env) has been commented with how to use each variable

While the goal is to put all configuration in that file, the reality is that secrets should not be stored in plain text, so in some cases, a secret will need to be manually added. Use the `./tc init` command to do so; it will prompt you for the approprate tokens or keys. Alternatively, you can checkout [Developing TechnoCore: Secrets](../../developing-technocore/secrets) for more information.

## Workflow
1. Make changes to the .env file
2. Save the .env file
3. Apply those changes using: `./tc deploy`
4. Confirm deployment success with `./tc ls` or `./tc watch ls`
You can learn more about all the TechnoCore commands on the [TechnoCore: Commands](../commands) page.

## Supported Services
By itself, TechnoCore is pretty boring. It really is only a device for creating and maintaining other Docker based services. So once you've created your .env file and ran `./tc deploy`, you'll have the ability to visit $SERVICE.$DOMAIN and get started working with the applications. For a list and descriptions of the services, checkout the [Supported Services](../supported-services) page.

---

# Troubleshooting
If you have any trouble running TechnoCore, there are places to look, commands to run, and a list of known problems over on the [Troubleshooting TechnoCore](../troubleshooting-technocore) page. 
