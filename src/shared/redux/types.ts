import { IDeviceReducerState } from './device';
import { IConfigReducerState } from './config';
import { IRoutingReducerState } from './routing';

export interface IReduxState {
  device: IDeviceReducerState;
  config: IConfigReducerState;
  routing: IRoutingReducerState;
}

export interface IReduxAction<T = string, P = any> {
  type: T;
  payload?: P;
}
