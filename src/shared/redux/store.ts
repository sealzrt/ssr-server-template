import {
  createStore,
  Store,
  applyMiddleware,
  combineReducers,
  Middleware,
} from 'redux';
import { IReduxState } from './types';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configReducer } from './config';
import { deviceReducer } from './device';
import { routingReducer } from './routing';

const reducers = combineReducers<IReduxState>({
  config: configReducer,
  device: deviceReducer,
  routing: routingReducer,
});

/**
 * Initializes redux store.
 * @param initialState
 */
export const createReduxStore = (initialState: IReduxState): Store => {
  const middleware: Middleware[] = [];

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};
