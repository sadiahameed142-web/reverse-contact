import type { INodeProperties } from 'n8n-workflow';

export const companyEnrichDescription: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'reversecontact.com',
		description: 'Company domain',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['enrichCompany'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'domain',
			},
		},
	},

	{
		displayName: 'Full Profile',
		name: 'fullProfile',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['enrichCompany'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'fullProfile',
			},
		},
	},
];