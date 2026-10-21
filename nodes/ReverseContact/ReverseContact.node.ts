
import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';
import { companyDescription } from './resources/company';
import { usageDescription } from './resources/usage';

export class ReverseContact implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Reverse Contact',
		name: 'reverseContact',
		icon: {
			light: 'file:reverse-contact-logo.svg',
			dark: 'file:reverse-contact-logo.svg',
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with the Reverse Contact API',
		defaults: {
			name: 'Reverse Contact',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],

		credentials: [
			{
				name: 'reverseContactApi',
				required: true,
			},
		],

		requestDefaults: {
			baseURL: 'https://api.reversecontact.com/v2',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},

		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Person',
						value: 'user',
					},
					{
						name: 'Company',
						value: 'company',
					},
					{
						name: 'Usage',
						value: 'usage',
					},
				],
				default: 'user',
			},

			...userDescription,
			...companyDescription,
			...usageDescription,
		],
	};
}
