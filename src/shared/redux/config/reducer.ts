import { IConfigReducerState, TConfigAction } from './types';
import { DeviceActions } from '../device/actions';

const initState = {} as IConfigReducerState;

export function configReducer(
  state = initState,
  action: TConfigAction,
) {
  return DeviceActions.match(action, {
    default: () => state,
  });
}
