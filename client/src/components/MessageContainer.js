import styled from 'styled-components';
import Message from './Message';

const MessageContainer = ({ message }) => {
  return (
    <Wrapper>
      <Message main={true} {...message} />
      {message.replies.map((reply) => {
        return <Message key={reply.id} {...reply} main={false} />;
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
