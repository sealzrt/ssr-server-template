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
import { tasksReducer } from './tasks';

const reducers = combineReducers<IReduxState>({
  tasks: tasksReducer,
  config: configReducer,
  device: deviceReducer,
});

/**
 * Initializes redux store.
 * @param initialState
 */
export const createReduxStore = (
  initialState: IReduxState,
): Store<IReduxState> => {
  const middleware: Middleware[] = [];

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};
