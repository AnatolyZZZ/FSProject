import HomePage from '@pages/HomePage'
import TestPage from '@pages/TestPage'
import LoginPage from '@pages/LoginPage';
import React from 'react';

export type AppRoute = {
	path: string;
	element: React.ElementType
	layout?: 'default' | 'empty'
	children?: AppRoute[];
}

export const routes: AppRoute[] = [
	{ path: '/', element: HomePage, layout: 'default' },
	{ path: 'test', element: TestPage, layout: 'default' },
	{ path: 'login', element: LoginPage, layout: 'empty' }
]
