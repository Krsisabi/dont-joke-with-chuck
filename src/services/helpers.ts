import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

export function isErrorData(
  data: unknown
): data is { status: string; error: string; message: string } {
  return (
    typeof data === 'object' &&
    data !== null &&
    'status' in data &&
    'message' in data &&
    'error' in data
  );
}
