import { ITasksReducer, TTasksAction } from './types';
import { TasksActions } from './actions';

const initState: ITasksReducer = {
  list: [],
};

export function tasksReducer(
  state = initState,
  action: TTasksAction,
) {
  return TasksActions.match(action, {
    RUN_TASK: task => ({
      ...state,
      list: [...state.list, task],
    }),
    STOP_TASK: key => ({
      ...state,
      list: state.list.filter(item => item.key !== key),
    }),
    default: () => state,
  });
}
