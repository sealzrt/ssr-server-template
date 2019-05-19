import { ServerResponse } from 'http';

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
