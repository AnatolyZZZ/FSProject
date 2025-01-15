import HomePage from '@pages/HomePage'
import React from 'react';

export type AppRoute = {
	path: string;
	element: React.ElementType
	layout?: 'default' | 'empty'
	children?: AppRoute[];
}

export const routes : AppRoute[] = [
	{ path: '/', element: HomePage , layout: 'default'}
]

 