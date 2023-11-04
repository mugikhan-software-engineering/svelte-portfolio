import type { SSTConfig } from 'sst';
import { SvelteKitSite, Api, StackContext } from 'sst/constructs';

export default {
	config(_input) {
		return {
			name: 'svelte-portfolio',
			region: 'us-east-1',
			profile: _input.stage === 'prod' ? 'mugi-prod' : 'mugi-dev'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }: StackContext) {
			// const api = new Api(stack, 'api', {
			// 	routes: {
			// 		'POST /send-email': 'packages/functions/src/send_email.handler'
			// 	}
			// 	customDomain: {
			// 		domainName: 'api.mugikhan.com'
			// 	}
			// });
			// api.attachPermissions(['ses:SendTemplatedEmail']);
			const site = new SvelteKitSite(stack, 'site', {
				// customDomain: {
				// 	domainName: stack.stage === 'prod' ? 'mugikhan.com' : `${stack.stage}.mugikhan.com`,
				// 	domainAlias:
				// 		stack.stage === 'prod' ? 'www.mugikhan.com' : `www.${stack.stage}.mugikhan.com`
				// }
				// bind: [api]
			});
			stack.addOutputs({
				// ApiUrl: api.customDomainUrl || api.url,
				SiteUrl: site.customDomainUrl || site.url
			});
		});
	}
} satisfies SSTConfig;
