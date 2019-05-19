import { ERoutingAction, TPushRoute } from './types';
import { RouterProps } from 'next/router';

export function pushRoute(route: RouterProps): TPushRoute {
  return {
    type: ERoutingAction.PushRoute,
    payload: route,
  };
}
