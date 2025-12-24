import { email } from './email';

export const api = new sst.aws.ApiGatewayV2('api', {
	domain: {
		name: $app.stage === 'production' ? 'api.mugikhan.com' : 'dev-api.mugikhan.com'
	},
	transform: {
		route: {
			handler: {
				link: [email]
			}
		}
	}
});

api.route('POST /send-email', {
	handler: 'packages/functions/src/send_email.handler',
	runtime: 'nodejs22.x',
	permissions: [
		{
			actions: ['ses:SendEmail', 'ses:SendRawEmail', 'ses:SendTemplatedEmail'],
			resources: ['*']
		}
	]
});
