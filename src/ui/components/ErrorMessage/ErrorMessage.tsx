import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { isErrorData, isFetchBaseQueryError } from '~/services/helpers';
import styles from './ErrorMessage.module.scss';

type ErrorMessageProps = {
  error?: FetchBaseQueryError | SerializedError;
};

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null;

  return (
    <div className={styles.error}>
      {isFetchBaseQueryError(error) && isErrorData(error.data) ? (
        <>
          <h2 className={styles.title}>
            Error {error.status} - {error.data.error}
          </h2>
          <p className={styles.message}>{error.data.message}</p>
        </>
      ) : (
        JSON.stringify(error, null, 2)
      )}
    </div>
  );
};
