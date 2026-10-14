import type { INodeProperties } from 'n8n-workflow';

export const usageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Get Usage',
				value: 'getUsage',
				action: 'Get API usage',
				description: 'Get current API usage',
				routing: {
					request: {
						method: 'GET',
						url: '/usage',
					},
				},
			},
		],
		default: 'getUsage',
	},
];