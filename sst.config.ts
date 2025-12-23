/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'svelte-portfolio',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			protect: ['production'].includes(input?.stage),
			home: 'aws',
			providers: {
				aws: {
					profile: input.stage === 'dev' ? 'mugi-dev' : 'mugi-dev',
					region: 'af-south-1'
				}
			}
		};
	},
	async run() {
		const { allSecrets } = await import('./infra/secrets');
		const { email } = await import('./infra/email');
		const { api } = await import('./infra/api');

		const domain = $app.stage === 'production' ? 'mugikhan.com' : `${$app.stage}.mugikhan.com`;
		const routerName = $app.stage === 'production' ? 'Portfolio' : 'router';
		const redirects = $app.stage === 'production' ? [`www.${domain}`] : undefined;
		const isPermanentStage = ['production'].includes($app.stage);

		const router = isPermanentStage
			? new sst.aws.Router(routerName, {
					domain: {
						name: domain,
						redirects: redirects
					}
				})
			: new sst.aws.Router(routerName);

		let links: any[] = [];
		if (isPermanentStage) {
			links = [...allSecrets, api, email];
		} else {
			links = [...allSecrets];
		}

		new sst.aws.SvelteKit('site', {
			router: {
				instance: router
			},
			link: links,
			environment: {
				VITE_API_URL: api.url
			}
		});
	}
});
