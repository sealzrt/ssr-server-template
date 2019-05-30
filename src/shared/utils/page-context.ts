import { createTheme } from '../theme';
import { SheetsRegistry } from 'jss';
import createGenerateClassName
  from '@material-ui/core/styles/createGenerateClassName';
import { IPageContext } from '../types';

const theme = createTheme();

/**
 * Creates page context.
 */
function createPageContext(): IPageContext {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  };
}

/**
 * Returns context for page.
 */
export function getPageContext(): IPageContext {
  // Every time create a new context on server side.
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse page context on client side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

declare global {
  namespace NodeJS {
    // tslint:disable-next-line:interface-name
    interface Global {
      __INIT_MATERIAL_UI__: IPageContext;
    }

    // tslint:disable-next-line:interface-name
    interface Process {
      browser: object;
    }
  }
}
