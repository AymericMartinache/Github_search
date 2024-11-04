//* --- SEMANTIC UI --
import { Segment } from 'semantic-ui-react';

interface MessageProps {
  message: string;
}

function Message({ message }: MessageProps) {
  return <Segment raised>{message}</Segment>;
}

export default Message;
