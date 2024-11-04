//* --- SEMANTIC UI --
import { Button, Container } from 'semantic-ui-react';

interface MoreBtnProps {
  gotToNextPage: () => void;
}

function MoreResultsButton({ gotToNextPage }: MoreBtnProps) {
  return (
    <Container style={{ marginTop: '2rem' }} textAlign="center" fluid>
      <Button
        color="twitter"
        onClick={() => {
          // console.log('on veut relancer le fetch mais pour la page suivante');
          gotToNextPage();
        }}
      >
        En voir plus...
      </Button>
    </Container>
  );
}

export default MoreResultsButton;
