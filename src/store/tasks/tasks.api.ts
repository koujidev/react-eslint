import { api } from '../index.api';

import { TTaskItem } from './tasks.types';

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<TTaskItem[], null>({
      query: () => ({
        url: '/tasks',
      }),
    }),
  }),
});