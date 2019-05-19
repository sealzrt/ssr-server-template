import { IDeviceReducerState } from './types';

const initState: IDeviceReducerState = {
  type: 'desktop',
  name: 'pc',
};

export function deviceReducer(state = initState) {
  return state;
}
