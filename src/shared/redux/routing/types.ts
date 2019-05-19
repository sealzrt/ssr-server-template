import { RouterProps } from 'next/router';
import { IReduxAction } from '../types';

export interface IRoutingReducerState extends RouterProps {
}

export enum ERoutingAction {
  PushRoute = 'routing / push route',
}

type TRoutingActionSeed<P> = IReduxAction<ERoutingAction, P>;
export type TPushRoute = TRoutingActionSeed<RouterProps>;

export type TRoutingAction = TPushRoute;
