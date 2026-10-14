
import type { INodeProperties } from 'n8n-workflow';

export const userFetchDescription: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'https://example.com/profile',
		description: 'Person profile URL',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['fetchPersons'],
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
		placeholder: 'Person ID',
		description: 'Reverse Contact person ID',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['fetchPersons'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
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
				operation: ['fetchPersons'],
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
