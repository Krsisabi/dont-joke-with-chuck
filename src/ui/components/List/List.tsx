import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { LocalJoke } from '~/services/types';
import { Card } from './Card';
import styles from './List.module.scss';
import { ErrorMessage } from '../ErrorMessage';

type ListProps = {
  data?: LocalJoke[] | null;
  isLoading?: boolean;
  isError?: boolean;
  error?: FetchBaseQueryError | SerializedError;
};

export const List = ({ data, isLoading, isError, error }: ListProps) => {
  if (isLoading) return <div className={styles.loader}>Searching...</div>;
  if (isError) return <ErrorMessage error={error} />;
  if (data && !data.length)
    return <div className={styles.loader}>No jokes for you :'(</div>;

  return (
    <ul className={styles.list}>
      {data?.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </ul>
  );
};
