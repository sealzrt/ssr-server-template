import { IDeviceReducerState, TDeviceAction } from './types';
import { DeviceActions } from './actions';

const initState: IDeviceReducerState = {
  type: 'desktop',
  name: 'pc',
};

export function deviceReducer(
  state = initState,
  action: TDeviceAction,
) {
  return DeviceActions.match(action, {
    default: () => state,
  });
}
