import type { INodeProperties } from 'n8n-workflow';
import { companyEnrichDescription } from './enrich';
import { companyFetchDescription } from './fetch';
import { companyCheckDescription } from './check';

const showOnlyForCompanies = {
	resource: ['company'],
};

export const companyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCompanies,
		},
		options: [
			{
				name: 'Enrich Company',
				value: 'enrichCompany',
				action: 'Enrich a company',
				description: 'Enrich a company profile',
				routing: {
					request: {
						method: 'POST',
						url: '/enrich/companies',
					},
				},
			},
			{
				name: 'Fetch Companies',
				value: 'fetchCompanies',
				action: 'Fetch companies',
				description: 'Fetch a company profile',
				routing: {
					request: {
						method: 'POST',
						url: '/fetch/companies',
					},
				},
			},
			{
				name: 'Check Company',
				value: 'checkCompany',
				action: 'Check a company',
				description: 'Check a company fetch request',
				routing: {
					request: {
						method: 'POST',
						url: '/fetch/companies/check',
					},
				},
			},
		],
		default: 'enrichCompany',
	},

	...companyEnrichDescription,
	...companyFetchDescription,
	...companyCheckDescription,
];