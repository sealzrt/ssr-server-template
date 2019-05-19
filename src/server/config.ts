import { IServerConfig, IClientConfig } from '../types';
import { prepareEnvironment } from './utils';

prepareEnvironment();

export const serverConfig: IServerConfig = {
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT),
};

export const clientConfig: IClientConfig = {};
