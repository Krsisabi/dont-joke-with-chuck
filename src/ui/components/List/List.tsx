import { LocalJoke } from '~/services/types';
import { Card } from './Card';
import styles from './List.module.scss';

type ListProps = {
  data?: LocalJoke[] | null;
  isLoading?: boolean;
  isError?: boolean;
  error?: unknown;
};

export const List = ({ data, isLoading, isError, error }: ListProps) => {
  if (isLoading) return <div className={styles.loader}>Searching...</div>;
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
