import type { INodeProperties } from 'n8n-workflow';

export const companyFetchDescription: INodeProperties[] = [
	{
		displayName: 'LinkedIn URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'https://www.linkedin.com/company/insightlix/',
		description: 'LinkedIn company URL',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['fetchCompanies'],
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
		displayName: 'Company ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'com_01jbd5vewyenebxgaz869ffe5t',
		description: 'Reverse Contact company ID',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['fetchCompanies'],
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