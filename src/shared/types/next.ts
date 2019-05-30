import { SheetsRegistry, GenerateClassName } from 'jss';
import { ITheme } from '../theme';
import { NextAppContext } from 'next/app';
import { NextContext } from 'next';
import { IResponse } from './server';
import { Store } from 'redux';

export interface IPageContext {
  theme: ITheme;
  sheetsManager: Map<any, any>;
  sheetsRegistry: SheetsRegistry;
  generateClassName: GenerateClassName<any>;
}

interface IAppContext extends NextContext {
  res: IResponse;
}

export interface INextAppContext extends NextAppContext {
  ctx: IAppContext;
}

export interface INextPageContext extends NextContext {
  store: Store;
}

// List of pages in your project. Here must be the list of Next pages,
// coming from ./src/pages. For example, if there is page named
// about.tsx (./src/pages/about.tsx), it is required to write "/about".
// For example - ENextPage.About = '/about'.
export enum ENextPage {
  About = '/about',
  Main = '/main',
}
