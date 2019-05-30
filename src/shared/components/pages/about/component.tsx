import * as React from 'react';

import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { IAboutPageProps } from './types';

import Head from 'next/head';

interface IProps extends WithStyles<typeof styles>, IAboutPageProps {
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
  },
  title: {
    color: 'deepskyblue',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 5,
  },
  subtitle: {
    maxWidth: 400,
    textAlign: 'center',
    lineHeight: '24px',
  },
});

class AboutPageComponent extends React.PureComponent<IProps> {
  public render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.wrap}>
        <Head>
          <title>Welcome to page About!</title>
        </Head>
        <div className={classes.title}>Hello buddy!</div>
        <div className={classes.subtitle}>
          Here is an example page we wanted to show you.
          <br/>
          You can create any page you want, but don't forget to add it
          to <b>ENextRoutes</b> enum and to <b>src/server/routes.ts</b> file.
        </div>
      </div>
    );
  }
}

export const AboutPage = withStyles(styles)(AboutPageComponent);
