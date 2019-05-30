import { unionize, ofType } from 'unionize';
import { ITask } from './types';

export const TasksActions = unionize({
  RUN_TASK: ofType<ITask>(),
  STOP_TASK: ofType<typeof Symbol>(),
}, {
  value: 'payload',
  tag: 'type',
});
