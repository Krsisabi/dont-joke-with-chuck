export type GetJokesResponse = {
  total: number;
  result: Joke[];
};

export type Joke = {
  id: string;
  value: string;
  url: string;
  created_at: string;
  categories?: string[];
  icon_url?: string;
  updated_at?: string;
};

export type LocalJokes = {
  total: number;
  jokes: LocalJoke[];
};

export type LocalJoke = {
  id: string;
  value: string;
  createdAt: string;
  url: string;
};
