//* --- SEMANTIC UI --
import { Form, Icon, Input, Segment } from 'semantic-ui-react';

//* --- CSS --
import './SearchBar.scss';

interface SearchBarProps {
  inputSearchValue: string;
  goToNewSearch: (newValue: string) => void;
}

function SearchBar({ goToNewSearch, inputSearchValue }: SearchBarProps) {
  return (
    <Segment raised className="search-segment">
      <Form className="search-form">
        <Input
          className="search-input"
          size="big"
          inverted
          focus
          icon={<Icon name="search" inverted circular />}
          iconPosition="left"
          // controle en lecture
          value={inputSearchValue}
          // controle en ecriture
          onChange={(event) => {
            goToNewSearch(event.target.value);
          }}
        />
      </Form>
    </Segment>
  );
}

export default SearchBar;
