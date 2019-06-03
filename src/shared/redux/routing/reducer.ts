import { IRouterReducer, TRouterAction } from './types';
import { RouterActions } from './actions';

const initState: IRouterReducer = {
  isRedirecting: false,
} as IRouterReducer;

export function routingReducer(
  state = initState,
  action: TRouterAction,
) {
  return RouterActions.match(action, {
    default: () => state,
    END_REDIRECT: () => ({...state, isRedirecting: false}),
    BEGIN_REDIRECT: () => ({...state, isRedirecting: true}),
  });
}
