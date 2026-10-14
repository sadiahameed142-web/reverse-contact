import type { INodeProperties } from 'n8n-workflow';

export const userEnrichDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		required: true,
		description: 'Professional email address',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['enrichPerson'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},

	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['enrichPerson'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'firstName',
			},
		},
	},

	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['enrichPerson'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'lastName',
			},
		},
	},

	{
		displayName: 'Company Name',
		name: 'companyName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['enrichPerson'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'companyName',
			},
		},
	},

	{
		displayName: 'Company Domain',
		name: 'companyDomain',
		type: 'string',
		default: '',
		placeholder: 'https://acme.com',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['enrichPerson'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'companyDomain',
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
				resource: ['user'],
				operation: ['enrichPerson'],
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