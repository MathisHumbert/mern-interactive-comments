import styled from 'styled-components';
import { FaReply } from 'react-icons/fa';

const ReplyBtn = ({ setReply }) => {
  return (
    <Wrapper
      className='reply-btn'
      onClick={() => setReply((reply) => !reply)}
      type='button'
    >
      <FaReply className='icon' />
      <h2>Reply</h2>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: 0;
  cursor: pointer;

  .icon {
    width: 14px;
    height: 12.25px;
    color: var(--moderate-blue-color);
  }

  &:hover {
    h2,
    .icon {
      color: var(--light-grayish-blue-color);
    }
  }

  @media (min-width: 1440px) {
    position: absolute;
    right: 24px;
    top: 28px;
    transform: translateY(50%);
  }
`;

export default ReplyBtn;
