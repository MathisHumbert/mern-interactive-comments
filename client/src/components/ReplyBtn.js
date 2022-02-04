import styled from 'styled-components';
import { FaReply } from 'react-icons/fa';

const ReplyBtn = ({ id }) => {
  console.log(id);
  return (
    <Wrapper className='reply-btn'>
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
`;

export default ReplyBtn;
