import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	sendEmail: async ({ cookies, request }) => {
		const data = await request.formData();
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
