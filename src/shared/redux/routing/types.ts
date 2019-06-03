import { UnionOf } from 'unionize';
import { RouterActions } from './actions';
import { RouterProps } from 'next/router';

type TPickRouterProps = 'pathname' | 'route' | 'asPath' | 'query';

export interface IRouterReducer extends Pick<RouterProps, TPickRouterProps> {
  isRedirecting: boolean;
}

export type TRouterAction = UnionOf<typeof RouterActions>;
