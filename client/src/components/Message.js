import styled from 'styled-components';
import FooterMessage from './FooterMessage';
import HeaderMessage from './HeaderMessage';

const Message = ({ main, user, createdAt, content, replyingTo }) => {
  return (
    <Wrapper
      className={main ? 'main-message single-message' : 'single-message'}
    >
      <HeaderMessage {...user} createdAt={createdAt} />
      <p>
        {replyingTo && <span>@{replyingTo}</span>} {content}
      </p>
      <FooterMessage username={user.username} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p span {
    color: var(--moderate-blue-color);
    font-weight: 500;
  }
`;
export default Message;
