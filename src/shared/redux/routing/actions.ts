import { unionize } from 'unionize';

export const RouterActions = unionize({
  BEGIN_REDIRECT: {},
  END_REDIRECT: {},
}, {
  value: 'payload',
  tag: 'type',
});
