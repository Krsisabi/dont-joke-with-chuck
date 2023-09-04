import { Dispatch, SetStateAction } from 'react';
import styles from './SearchInput.module.scss';

type SearchInputProps = {
  value: string;
  onSearch: Dispatch<SetStateAction<string>>;
  info?: number | null;
};

export const SearchInput = ({ value, onSearch, info }: SearchInputProps) => (
  <div className={styles.wrapper}>
    <input
      type="text"
      autoFocus
      autoComplete="off"
      className={styles.search}
      name="searchValue"
      value={value}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Type to search some jokes..."
    />
    {info ? <span className={styles.info}>Found jokes: {info}</span> : null}
  </div>
);
