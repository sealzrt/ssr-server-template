import { ERoutingAction, IRoutingReducerState, TRoutingAction } from './types';

const initState = {} as IRoutingReducerState;

export function routingReducer(
  state = initState,
  { type, payload }: TRoutingAction,
) {
  switch (type) {
    case ERoutingAction.PushRoute:
      return { ...state, ...payload };
    default:
      return state;
  }
}
