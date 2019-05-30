import { AboutPage } from './component';
import { connect } from 'react-redux';
import { IReduxState } from '../../../redux';
import { IAboutPageConnectedProps } from './types';

function mapStateToProps(state: IReduxState): IAboutPageConnectedProps {
  return {};
}

export const AboutPageConnected = connect(mapStateToProps)(AboutPage);
