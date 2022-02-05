import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useGlobalContext } from '../contextAPI/context';

const UpvoteBtn = ({ id, replyID, score }) => {
  const { toggleUpvotes } = useGlobalContext();

  return (
    <Wrapper className='upvote-btn'>
      <FaPlus
        className='icon'
        onClick={() => toggleUpvotes('add', id, replyID)}
      />
      <h2>{score}</h2>
      <FaMinus
        className='icon'
        onClick={() => toggleUpvotes('subtract', id, replyID)}
      />
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

  @media (min-width: 1440px) {
    position: absolute;
    top: 24px;
    flex-direction: column;
    width: 40px;
    height: 100px;
    justify-content: space-between;
    padding: 12px;
  }
`;

export default UpvoteBtn;
