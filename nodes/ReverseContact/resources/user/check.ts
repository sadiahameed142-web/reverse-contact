import type { INodeProperties } from 'n8n-workflow';

export const userCheckDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'https://www.linkedin.com/in/sadia-hameed/',
		description: 'LinkedIn profile URL',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['checkPerson'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},

	{
		displayName: 'Person ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'prs_01jbd5vewyenebxgaz869ffe5t',
		description: 'Reverse Contact person ID',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['checkPerson'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
];