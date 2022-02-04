import styled from 'styled-components';
import HeaderInfo from './HeaderInfo';

const Message = ({ main, user, createdAt }) => {
  console.log(user);
  return (
    <Wrapper
      className={main ? 'main-message single-message' : 'single-message'}
    >
      <HeaderInfo {...user} createdAt={createdAt} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
`;
export default Message;
