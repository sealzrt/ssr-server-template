import * as NextRoutes from 'next-routes';
import { ENextPage } from '../types';

// There is a bug in library at this time and we just need these typings.
// tslint:disable-next-line:no-duplicate-imports
import Routes from 'next-routes';

interface IServerRoute {
  name: string;
  href: string;
  as: string | ((...params: string[]) => string);
  page: ENextPage;
}

export function getRouteByNextPage(page: ENextPage): IServerRoute {
  return routes.find(item => item.page === page);
}

export const routes: IServerRoute[] = [
  {
    name: 'about',
    href: '/about',
    as: '/about',
    page: ENextPage.About,
  },
];

// @ts-ignore
const nextJsRoutes: Routes = new NextRoutes();

/**
 * List of Next routes.
 */
export const nextRoutes = routes.reduce((acc, item) => {
  return acc.add(item.name, item.href, item.page);
}, nextJsRoutes);
