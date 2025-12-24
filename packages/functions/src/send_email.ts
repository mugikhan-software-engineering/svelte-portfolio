import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Resource } from 'sst';

const jsonResponse = (statusCode: number, body: object): APIGatewayProxyResult => ({
	statusCode,
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(body)
});

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	if (event.body == null || event.body == undefined) {
		return jsonResponse(400, {
			success: false,
			message: 'Your email failed to send!'
		});
	}

	try {
		const data = JSON.parse(event.body);
		const { name, email, service, message } = data;

		if (process.env.SST_DEV) {
			console.log('App Stage', Resource.App.stage);
			console.log('Data', JSON.stringify(data));
			return jsonResponse(200, {
				success: true,
				message: 'Email sent!'
			});
		}

		const client = new SESv2Client({ region: 'af-south-1' });

		const toAddresses = ['mugikhan@gmail.com'];

		const params = new SendEmailCommand({
			Destination: {
				ToAddresses: toAddresses
			},
			FromEmailAddress: Resource.HelpEmail.sender,
			ReplyToAddresses: [email],
			Content: {
				Template: {
					TemplateName: 'PortfolioRequest2026',
					TemplateData: JSON.stringify({
						name: name,
						service: service,
						email: email,
						message: message
					})
				}
			}
		});

		const response = await client.send(params);
		console.log('Email sent', response);
		return jsonResponse(200, {
			success: true,
			message: 'Your email has been sent!'
		});
	} catch (error) {
		console.error('Error sending email', error);
		return jsonResponse(400, {
			success: false,
			message: 'Your email failed to send!'
		});
	}
};
