import { lazy } from 'react';
import Main from '../pages/Main/Main';
import Book from '../pages/Book/Book';

export interface IRoute {
	path: string,
	component: any,
	exact?: boolean
}

export const routes: IRoute[] = [
	{
		path: '/',
		component: Main,
		exact: true
	},
	{
		path: '/book/:id',
		component: Book,
		exact: true
	},
	{
		path: '*',
		component: lazy(() => import('../pages/NotFound/NotFound'))
	}
]
