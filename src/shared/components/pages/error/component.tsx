import * as React from 'react';

import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { IErrorPageProps } from './types';

import Head from 'next/head';
import { getPageTitle } from '../../../utils/dom';

interface IProps extends WithStyles<typeof styles>, IErrorPageProps {
}

const styles = createStyles({});

class ErrorPageComponent extends React.PureComponent<IProps> {
  public static async getInitialProps() {
    return {};
  }

  public render() {
    const {
      // classes,
      title,
    } = this.props;

    return (
      <>
        <Head>
          <title>
            {getPageTitle(title || 'woops! An error occurred')}
          </title>
        </Head>
        <div>
          Something went wrong on our side :(
        </div>
      </>
    );
  }
}

export const ErrorPage = withStyles(styles)(ErrorPageComponent);
