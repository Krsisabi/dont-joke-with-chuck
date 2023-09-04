import { Container } from '~/ui/components/Container';
import { List } from './ui/components/List';
import { SearchInput } from './ui/components/SearchInput';

function App() {
  return (
    <Container>
      <SearchInput />
      <List />
    </Container>
  );
}

export default App;
