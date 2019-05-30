import { ServerResponse } from 'http';
import { ENextPage } from './next';

export interface IClientConfig {

}

export interface IServerConfig {
  env: string;
  port: number;
}

export interface IDeviceInformation {
  type: 'phone' | 'tablet' | 'desktop';
  name: string;
}

export interface IResponse extends ServerResponse {
  locals: {
    config: IClientConfig;
    device: IDeviceInformation;
  };
}

export interface IServerRoute {
  name: string;
  href: string;
  as: string | ((...params: string[]) => string);
  page: ENextPage;
}
