import styled from 'styled-components';
import Message from './Message';

const MessageContainer = ({ message }) => {
  return (
    <Wrapper>
      <Message {...message} id={message.id} main={true} />
      {message.replies.map((reply) => {
        return (
          <Message
            key={reply.id}
            {...reply}
            id={message.id}
            replyID={reply.id}
            main={false}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  div:last-child {
    padding-bottom: 0;
  }
`;
export default MessageContainer;
