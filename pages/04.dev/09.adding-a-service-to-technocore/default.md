---
title: 'Adding a Service to TechnoCore'
---

1. Make repo using template.
2. Clone repo to local. 
3. Run ./tc generate_gitmodules
4. Add service to dev.env
5. Replace EXAMPLE_SERVICE with name of the service.
	* Note the 2(?) places that need to be uppercased.  (Label for Traefiks' rules and volumes, both are an env var )
6. Configure settings for specific service
	 * Ingress access
	 * Env vars
	 * Secrets
	 * Volumes
	 * Ports
	 * DB?
	 * Accounts
7. Create Docker image (if nessesary - usually is)
8. Test
9. Integrate with other services
    * technocore.stack.sh
11. 