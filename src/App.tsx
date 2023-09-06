import { useState } from 'react';

import { Container } from './ui/components/Container';
import { SearchInput } from './ui/components/SearchInput';
import { List } from './ui/components/List';
import { useDebounce } from './hooks/useDebounce';
import { useSearchJokesQuery } from './services/api';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue.trim(), 500);

  const shouldSkipFetch = debouncedSearchValue.length < 3;

  const { data, isFetching, isError, error } = useSearchJokesQuery(
    debouncedSearchValue,
    { skip: shouldSkipFetch }
  );

  const relevantData = shouldSkipFetch ? null : data;

  return (
    <Container>
      <SearchInput
        value={searchValue}
        onSearch={setSearchValue}
        info={relevantData?.total}
      />
      <List
        data={relevantData?.jokes}
        error={error}
        isError={isError}
        isLoading={isFetching}
      />
    </Container>
  );
}

export default App;
