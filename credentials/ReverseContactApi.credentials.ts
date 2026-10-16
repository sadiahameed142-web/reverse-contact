
import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ReverseContactApi implements ICredentialType {
	name = 'reverseContactApi';

	displayName = 'Reverse Contact API';

	documentationUrl =
		'https://github.com/sadiahameed142-web/n8n-nodes-reverse-contact';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.reversecontact.com/v2',
			url: '/usage',
			method: 'GET',
		},
	};
}
