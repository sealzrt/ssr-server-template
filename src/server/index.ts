import * as next from 'next';
import * as express from 'express';
import * as MobileDetect from 'mobile-detect';
import { serverConfig, clientConfig } from './config';
import { nextRoutes } from './routes';
import { IResponse } from '../types';
import { log } from './logger';

const app = next(extractServerOptions(serverConfig.env));
const handler = nextRoutes.getRequestHandler(app);
const server = express();

app
  .prepare()
  .then(() => {
    // Parsing request body.
    server.use(express.json());

    server.use((req, res: IResponse, callNextHandler) => {
      const detected = new MobileDetect(req.headers['user-agent']);
      const tablet = detected.tablet();
      const phone = detected.phone() || detected.mobile();

      // Pass client config and information about device to each request,
      // because client side dont know about it and environment variables.
      res.locals.config = clientConfig;
      res.locals.device = {
        type: (!!tablet && 'tablet') || (!!phone && 'phone') || 'desktop',
        name: phone || tablet || 'pc',
      };

      callNextHandler();
    });

    // Handle request with Next.
    server.use(handler);

    server.listen(serverConfig.port, error => {
      if (error) {
        throw error;
      }

      log(`Ready on port - ${serverConfig.port.toString().yellow.bold}`);
      log(`Current node environment - ${serverConfig.env.yellow.bold}`);
    });
  });

function extractServerOptions(env: string): next.ServerOptions {
  return {
    dev: env !== 'production',
    dir: './src',
  };
}
