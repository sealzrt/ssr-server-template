import { IDeviceReducerState } from './device';
import { IConfigReducerState } from './config';
import { IRouterReducer } from './routing';

export interface IReduxState {
  routing: IRouterReducer;
  device: IDeviceReducerState;
  config: IConfigReducerState;
}
