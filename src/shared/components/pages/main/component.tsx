import * as React from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { IMainPageProps } from './types';

import Head from 'next/head';
import Link from 'next/link';
import { getRouteByNextPage } from '../../../utils/next';
import { ENextPage } from '../../../types';

interface IProps extends WithStyles<typeof styles>, IMainPageProps {
}

const styles = createStyles({
  wrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

class MainPageComponent extends React.PureComponent<IProps> {
  public render() {
    const {
      classes,
    } = this.props;
    const aboutRoute = getRouteByNextPage(ENextPage.About);

    return (
      <div className={classes.wrap}>
        <Head>
          <title>Welcome to page Main!</title>
        </Head>
        <div>
          Just a sample page.
          <div>
            <Link href={aboutRoute.page} as={aboutRoute.as as string} passHref>
              <a>
                Go to About.
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export const MainPage = withStyles(styles)(MainPageComponent);
