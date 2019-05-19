import * as React from 'react';

import { Store } from 'redux';
import { IReduxState } from '../shared/redux';
import { IDeviceReducerState } from '../shared/redux/device';
import { IConfigReducerState } from '../shared/redux/config';
import { INextPageContext, INextAppContext } from '../types';

import { getOrCreateStore } from '../utils/store';

import { getPageContext } from '../utils';

import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import JssProvider from 'react-jss/lib/JssProvider';

interface IProps {
  config: IConfigReducerState;
  reduxStore: Store<IReduxState>;
  initialReduxState: IReduxState;
}

export class ThemedApp extends App<IProps> {
  public static async getInitialProps(appContext: INextAppContext) {
    const { Component: Page, ctx, router } = appContext;

    const applicationState: IReduxState = {
      routing: { ...router },
      config: ctx.res ? ctx.res.locals.config : ({} as IConfigReducerState),
      device: ctx.res ? ctx.res.locals.device : ({} as IDeviceReducerState),
    };
    const reduxStore = getOrCreateStore(applicationState);
    const pageProps = Page.getInitialProps
      ? await Page.getInitialProps({
        ...ctx,
        store: reduxStore,
      } as INextPageContext)
      : {};

    return {
      pageProps,
      initialReduxState: reduxStore.getState(),
    };
  }

  private readonly reduxStore: Store<IReduxState>;

  public constructor(props) {
    super(props);
    this.reduxStore = getOrCreateStore(props.initialReduxState);
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
