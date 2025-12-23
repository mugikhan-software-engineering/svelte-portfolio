import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { Resource } from 'sst';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

async function validateToken(token: string, secret: string) {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			response: token,
			secret: secret
		})
	});

	const data: TokenValidateResponse = await response.json();

	return {
		// Return the status
		success: data.success,

		// Return the first error if it exists
		error: data['error-codes']?.length ? data['error-codes'][0] : null
	};
}

export const actions: Actions = {
	sendEmail: async ({ cookies, request }) => {
		const data = await request.formData();

		const token = data.get('cf-turnstile-response') as string;
		const secret = Resource.CLOUDFLARE_SECRET_KEY.value as string;

		const { success, error } = await validateToken(token, secret);

		if (!success) {
			return fail(401, {
				description: 'Invalid CAPTCHA',
				error: error
			});
		}

		const email = {
			name: data.get('name'),
			email: data.get('email'),
			service: data.get('service'),
			message: data.get('message')
		};
		if (!email.email || !email.name || !email.message) {
			return fail(422, {
				description: 'Enter a name, email and message',
				error: 'no values'
			});
		}
		try {
			const response = await fetch(
				'https://li26aztkmi.execute-api.af-south-1.amazonaws.com/portfolio/portfolio-contact-form',
				{
					method: 'POST',
					body: JSON.stringify(email)
				}
			);
			const json = await response.json();
			return json;
		} catch (e) {
			return fail(400, {
				description: 'Failed to send email, Try again later.',
				error: 'error'
			});
		}
	}
};
