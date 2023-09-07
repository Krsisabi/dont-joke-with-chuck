import { useMemo, useState } from 'react';
import { useDebounce } from '~/hooks/useDebounce';
import { useSearchJokesQuery } from '~/services/api';
import { List } from '~/ui/components/List';
import { Pagination } from '~/ui/components/Pagination';
import { SearchInput } from '~/ui/components/SearchInput';
import { Container } from './ui/components/Container';

const PageSize = 8;

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearchValue = useDebounce(searchValue.trim(), 500);

  const shouldSkipFetch = debouncedSearchValue.length < 3;

  const { data, isFetching, isError, error } = useSearchJokesQuery(
    debouncedSearchValue,
    { skip: shouldSkipFetch }
  );

  const currentData = useMemo(() => {
    if (shouldSkipFetch || !data) return null;

    const { jokes, total } = data;

    const firstJokeIndex = (currentPage - 1) * PageSize;
    const lastJokeIndex = firstJokeIndex + PageSize;

    return {
      jokes: jokes.slice(firstJokeIndex, lastJokeIndex),
      total,
    };
  }, [shouldSkipFetch, data, currentPage, debouncedSearchValue]);

  return (
    <Container>
      <SearchInput
        value={searchValue}
        onSearch={setSearchValue}
        info={currentData?.total}
      />
      <List
        data={currentData?.jokes}
        error={error}
        isError={isError}
        isLoading={isFetching}
      />
      {currentData && !isFetching && (
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalCount={currentData.total}
        />
      )}
    </Container>
  );
}

export default App;
