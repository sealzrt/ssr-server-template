import { AboutPage } from './component';
import { connectAdvanced } from 'react-redux';
import { IReduxState } from '../../../redux';
import { IAboutPageOwnProps, IAboutPageProps } from './types';

function f() {
  return (
    _state: IReduxState,
    ownProps: IAboutPageOwnProps,
  ): IAboutPageProps => {
    return {
      ...ownProps,
      // Other props need to be connected.
    };
  };
}

export const AboutPageConnected = connectAdvanced(f)(AboutPage);
