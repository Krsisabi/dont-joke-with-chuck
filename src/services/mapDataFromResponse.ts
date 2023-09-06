import { GetJokesResponse, LocalJokes } from './types';

export const extractLocalJokes = ({
  total,
  result,
}: GetJokesResponse): LocalJokes => ({
  total,
  jokes: result.map(({ id, value, created_at, url }) => ({
    id,
    value,
    createdAt: created_at,
    url,
  })),
});
