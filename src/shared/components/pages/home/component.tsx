import * as React from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { IHomePageProps } from './types';

import Head from 'next/head';
import { getPageTitle } from '../../../utils/dom';
import { withErrorHandler } from '../../../hoc/with-error-handler';

interface IProps extends WithStyles<typeof styles>, IHomePageProps {
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

class HomePageComponent extends React.PureComponent<IProps> {
  public render() {
    const {
      classes,
    } = this.props;

    return (
      <>
        <Head>
          <title>{getPageTitle('home')}</title>
        </Head>
        <div className={classes.wrap}>
          Just a sample page.
        </div>
      </>
    );
  }
}

export const HomePage = withErrorHandler(
  withStyles(styles)(HomePageComponent),
);
