import { useEffect } from 'react';
import clsx from 'clsx';

import { usePagination, DOTS } from '~/hooks/usePagination';

import styles from './Pagination.module.scss';

export type PaginationProps = {
  totalCount: number;
  pageSize?: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  useEffect(() => {
    onPageChange(1);
  }, [totalCount]);

  if (!paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lastPage = paginationRange.at(-1);

  return (
    <ul className={styles.paginationContainer}>
      <li
        className={clsx(styles.paginationItem, {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={() => {
          onTop();
          onPrevious();
        }}
      >
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange?.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className={`${styles.paginationItem} ${styles.dots}`}
              key={`dots-${i}`}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={clsx(styles.paginationItem, {
              [styles.selected]: +pageNumber === currentPage,
            })}
            onClick={() => {
              onTop();
              onPageChange(+pageNumber);
            }}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={clsx(styles.paginationItem, {
          [styles.disabled]: currentPage === lastPage,
        })}
        onClick={() => {
          onTop();
          onNext();
        }}
        key="next"
      >
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
    </ul>
  );
};
