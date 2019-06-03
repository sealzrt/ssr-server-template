import { HomePage } from './component';
import { connect } from 'react-redux';
import { IReduxState } from '../../../redux';
import { IHomePageMSTPProps } from './types';

function mapStateToProps(state: IReduxState): IHomePageMSTPProps {
  return {};
}

export const HomePageConnected = connect(mapStateToProps)(HomePage);
