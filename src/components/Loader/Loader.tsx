//* --- SEMANTIC UI --
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

function Spinner() {
  return (
    <div>
      <Segment>
        <Dimmer active inverted>
          <Loader inverted size="medium">
            Loading
          </Loader>
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png " />
      </Segment>
    </div>
  );
}

export default Spinner;
