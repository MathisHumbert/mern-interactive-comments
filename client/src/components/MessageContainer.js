import styled from 'styled-components';
import Message from './Message';

const MessageContainer = ({
  _id,
  content,
  createdAt,
  replies,
  score,
  user,
}) => {
  return (
    <Wrapper>
      <Message main={true} />
      {replies.map((reply) => {
        return <Message key={reply.id} {...reply} main={false} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 0;
  border: 1px solid blue;
`;
export default MessageContainer;
