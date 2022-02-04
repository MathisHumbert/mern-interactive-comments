import styled from 'styled-components';

const Message = ({ main }) => {
  return (
    <Wrapper
      className={main ? 'main-message single-message' : 'single-message'}
    >
      Message
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: white;
`;
export default Message;
