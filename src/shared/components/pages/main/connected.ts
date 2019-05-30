import { MainPage } from './component';
import { connect } from 'react-redux';
import { IReduxState } from '../../../redux';
import { IMainPageConnectedProps } from './types';

function mapStateToProps(state: IReduxState): IMainPageConnectedProps {
  return {};
}

export const MainPageConnected = connect(mapStateToProps)(MainPage);
