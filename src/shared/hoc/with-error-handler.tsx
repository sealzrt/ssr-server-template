import * as React from 'react';
import { NextComponentType } from 'next';
import { INextPageContext } from '../types';
import { GetInitialPropsError } from '../tools/get-initial-props-error';

import { ErrorPage } from '../components/pages/error';

export function withErrorHandler<Props = any>(
  Component: NextComponentType<Props, Props, INextPageContext>,
) {
  interface IWithErrorHandlerProps {
    error?: GetInitialPropsError | null;
    props: Props;
  }

  class WithErrorHandler
    extends React.PureComponent<Props & IWithErrorHandlerProps> {
    public static async getInitialProps(
      ctx: INextPageContext,
    ): Promise<IWithErrorHandlerProps> {
      try {
        const props = Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {} as Props;

        return {
          props,
        };
      } catch (e) {
        return {
          props: {} as Props,
          error: e instanceof GetInitialPropsError
            ? e
            : null,
        };
      }
    }

    public render() {
      const { error, props } = this.props;

      return error === undefined
        ? <Component {...props} />
        : <ErrorPage {...error}/>;
    }
  }

  return WithErrorHandler;
}
