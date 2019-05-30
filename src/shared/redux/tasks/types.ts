import { UnionOf } from 'unionize';
import { TasksActions } from './actions';

export interface ITasksReducer {
  list: ITask[];
}

export interface ITask {
  key: typeof Symbol;
  title: string;
}

export type TTasksAction = UnionOf<typeof TasksActions>;
