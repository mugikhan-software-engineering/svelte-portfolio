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
	sendEmail: async ({ request }) => {
		const data = await request.formData();

		// Skip Turnstile validation in development
		const isDev = import.meta.env.DEV;
		if (!isDev) {
			const token = data.get('cf-turnstile-response') as string;
			const secret = Resource.CLOUDFLARE_SECRET_KEY.value as string;

			const { success, error } = await validateToken(token, secret);

			if (!success) {
				return fail(401, {
					description: 'Invalid CAPTCHA',
					error: error
				});
			}
		}

		const contactFormData = {
			name: data.get('name')?.toString() ?? '',
			email: data.get('email')?.toString() ?? '',
			service: data.get('service')?.toString() ?? '',
			message: data.get('message')?.toString() ?? ''
		};

		if (
			!contactFormData.email ||
			!contactFormData.name ||
			!contactFormData.message ||
			!contactFormData.service
		) {
			return fail(422, {
				description: 'Please fill in all fields',
				error: 'missing values'
			});
		}
		try {
			const apiUrl = `${Resource.api.url}/send-email`;

			const response = await fetch(apiUrl, {
				method: 'POST',
				body: JSON.stringify(contactFormData),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const result: { success: boolean; message: string } = await response.json();

			if (!response.ok || !result.success) {
				return fail(response.status, {
					description: result.message || 'Failed to send your message. Please try again.',
					error: result.message
				});
			}

			return {
				success: true,
				description: result.message
			};
		} catch {
			return fail(400, {
				description: 'Failed to send email, Try again later.',
				error: 'error'
			});
		}
	}
};
