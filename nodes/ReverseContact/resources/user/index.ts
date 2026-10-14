import type { INodeProperties } from 'n8n-workflow';
import { userEnrichDescription } from './enrich';
import { userFetchDescription } from './fetch';
import { userCheckDescription } from './check';

const showOnlyForUsers = {
	resource: ['user'],
};

export const userDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUsers,
		},
		options: [
			{
				name: 'Enrich Person',
				value: 'enrichPerson',
				action: 'Enrich a person',
				description: 'Enrich a person profile',
				routing: {
					request: {
						method: 'POST',
						url: '/enrich/persons',
					},
				},
			},
			{
				name: 'Fetch Persons',
				value: 'fetchPersons',
				action: 'Fetch persons',
				description: 'Fetch persons from a company domain',
				routing: {
					request: {
						method: 'POST',
						url: '/fetch/persons',
					},
				},
			},
			{
				name: 'Check Person',
				value: 'checkPerson',
				action: 'Check a person',
				description: 'Check a person fetch request',
				routing: {
					request: {
						method: 'POST',
						url: '/fetch/persons/check',
					},
				},
			},
		],
		default: 'enrichPerson',
	},
	...userEnrichDescription,
	...userFetchDescription,
	...userCheckDescription,
];