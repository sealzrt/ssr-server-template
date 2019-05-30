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
import { TasksActions } from '../shared/redux/tasks/actions';

interface IProps {
  config: IConfigReducerState;
  reduxStore: Store<IReduxState>;
  initialReduxState: IReduxState;
}

export class ThemedApp extends App<IProps> {
  public static async getInitialProps(appContext: INextAppContext) {
    const { Component: Page, ctx } = appContext;

    const applicationState: IReduxState = {
      config: ctx.res ? ctx.res.locals.config : ({} as IConfigReducerState),
      device: ctx.res ? ctx.res.locals.device : ({} as IDeviceReducerState),
      tasks: {
        list: [],
      },
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

    let lastRedirectTask;

    Router.events.on('routeChangeStart', (url: string) => {
      if (url !== Router.router.asPath) {
        lastRedirectTask = Symbol();

        const redirectAction = TasksActions.RUN_TASK({
          key: lastRedirectTask,
          title: 'Загружаем новую страницу..',
        });

        this.reduxStore.dispatch(redirectAction);
      }
    });

    Router.events.on('routeChangeComplete', () => {
      this.reduxStore.dispatch(TasksActions.STOP_TASK(lastRedirectTask));
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
