import * as React from 'react';

import { Store } from 'redux';
import { IReduxState } from '../shared/redux';
import { IDeviceReducerState } from '../shared/redux/device';
import { IConfigReducerState } from '../shared/redux/config';
import { INextPageContext, INextAppContext } from '../shared/types';

import { getPageContext } from '../shared/utils/page-context';
import { getOrCreateStore } from '../shared/utils/store';

import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import JssProvider from 'react-jss/lib/JssProvider';

import Router from 'next/router';
import { RouterActions } from '../shared/redux/routing/actions';

interface IProps {
  pageProps: any;
  initialReduxState: IReduxState;
}

export class ThemedApp extends App<IProps> {
  public static async getInitialProps(
    appContext: INextAppContext,
  ): Promise<IProps> {
    const { Component: Page, ctx, router } = appContext;
    const { query, pathname, asPath, route } = router;

    const applicationState: IReduxState = {
      config: ctx.res ? ctx.res.locals.config : ({} as IConfigReducerState),
      device: ctx.res ? ctx.res.locals.device : ({} as IDeviceReducerState),
      routing: {
        query,
        pathname,
        asPath,
        route,
        isRedirecting: false,
      },
    };
    const reduxStore = getOrCreateStore(applicationState);
    const initialReduxState = reduxStore.getState();
    const pageProps = Page.getInitialProps
      ? await Page.getInitialProps({
        ...ctx,
        store: reduxStore,
      } as INextPageContext)
      : {};

    return {
      pageProps,
      initialReduxState,
    };
  }

  private readonly reduxStore: Store<IReduxState>;

  public constructor(props) {
    super(props);
    this.reduxStore = getOrCreateStore(props.initialReduxState);

    Router.events.on('routeChangeStart', (url: string) => {
      if (url !== Router.router.asPath) {
        this.reduxStore.dispatch(RouterActions.BEGIN_REDIRECT());
      }
    });

    Router.events.on('routeChangeComplete', () => {
      this.reduxStore.dispatch(RouterActions.END_REDIRECT());
    });
  }

  public componentDidMount(): void {
    const jssServerSide = document.querySelector('#jss-server-side');

    if (jssServerSide) {
      jssServerSide.remove();
    }
  }

  public render() {
    const { Component: Page, pageProps } = this.props;
    const pageContext = getPageContext();

    return (
      <Container>
        <Provider store={this.reduxStore}>
          <JssProvider
            registry={pageContext.sheetsRegistry}
            generateClassName={pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={pageContext.theme}
              sheetsManager={pageContext.sheetsManager}
            >
              <CssBaseline/>
              <Page pageContext={pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}

export default ThemedApp;
