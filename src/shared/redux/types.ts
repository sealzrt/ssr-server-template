import { IDeviceReducerState } from './device';
import { IConfigReducerState } from './config';
import { ITasksReducer } from './tasks';

export interface IReduxState {
  tasks: ITasksReducer;
  device: IDeviceReducerState;
  config: IConfigReducerState;
}
