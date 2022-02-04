import styled from 'styled-components';
import Message from './Message';

const MessageContainer = ({ message }) => {
  return (
    <Wrapper>
      <Message {...message} id={message.id} />
      {message.replies.map((reply) => {
        return (
          <Message
            key={reply.id}
            {...reply}
            id={message.id}
            replyID={reply.id}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default MessageContainer;
