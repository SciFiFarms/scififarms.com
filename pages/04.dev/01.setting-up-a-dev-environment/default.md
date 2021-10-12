---
title: 'Setting Up a Dev Environment'
---

# Suggested IDE: VS Code
Because of the wide range of languages being used in TechnoCore, it was a little tricky finding an IDE that supported everything, but VS Code does a pretty good job and has project settings included. This includes things like debugging connections as well as recommend extensions.

## load_git_repos
One of the few drawbacks to VS Code is [poor nested git repo support](https://github.com/microsoft/vscode/issues/37947#issuecomment-568146225). Rather than manually adding every repo, technocore includes a load_git_repos command that will scan `data/` and `services/` for git repos and add them to .gitmodules which alerts VS Code of the nested repos.
!!! .gitmodules is ignored by git as these repos will likely be different for each developer. Fortunately, VS Code reads the file regardless.

# Cloning Repos
The way TechnoCore currently works is that it includes the git repo for each service in the Docker image at `/var/lib/technocore`. When you set the `PROD=`, TechnoCore mounts `/var/lib/technocore` to `services/`. It does not include
