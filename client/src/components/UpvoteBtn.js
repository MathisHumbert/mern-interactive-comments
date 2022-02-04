import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const UpvoteBtn = ({ id, replyID, score }) => {
  return (
    <Wrapper className='upvote-btn'>
      <FaPlus className='icon' />
      <h2>{score}</h2>
      <FaMinus className='icon' />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 100px;
  height: 40px;
  background: var(--very-light-grey);
  border-radius: 10px;

  .icon {
    font-size: 10px;
    font-weight: 500;
    color: var(--light-grayish-blue-color);
    cursor: pointer;

    &:hover {
      color: var(--moderate-blue-color);
    }
  }
`;

export default UpvoteBtn;
