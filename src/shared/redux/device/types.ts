import { IDeviceInformation } from '../../types';
import { DeviceActions } from './actions';
import { UnionOf } from 'unionize';

export interface IDeviceReducerState extends IDeviceInformation {
}

export type TDeviceAction = UnionOf<typeof DeviceActions>;
