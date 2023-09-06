import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetJokesResponse, LocalJokes } from './types';
import { extractLocalJokes } from './mapDataFromResponse';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + '/jokes',
  }),
  reducerPath: 'jokesApi',
  endpoints: (build) => ({
    searchJokes: build.query<LocalJokes, string>({
      query: (searchValue) => ({
        url: `search?query=${encodeURIComponent(searchValue)}`,
      }),
      transformResponse: (res: GetJokesResponse) => extractLocalJokes(res),
    }),
  }),
});

export const { useSearchJokesQuery } = api;
