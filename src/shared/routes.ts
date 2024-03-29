import * as NextRoutes from 'next-routes';
import { ENextPage, IServerRoute } from './types';

// There is a bug in library at this time and we just need these typings.
// tslint:disable-next-line:no-duplicate-imports
import Routes from 'next-routes';

export const routes: IServerRoute[] = [
  {
    name: 'home',
    href: '/',
    as: '/',
    page: ENextPage.Home,
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
