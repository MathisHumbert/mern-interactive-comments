import styled from 'styled-components';
import { FaPlus, FaMinus, FaReply } from 'react-icons/fa';

const FooterMessage = () => {
  return (
    <Wrapper>
      <button className='upvote-btn'>
        <FaPlus className='icon' />
        <h2>12</h2>
        <FaMinus className='icon' />
      </button>
      <button className='reply-btn'>
        <FaReply className='icon' />
        <h2>Reply</h2>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;

  .upvote-btn {
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
  }

  .reply-btn {
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
  }

  h2 {
    line-height: 0;
    color: var(--moderate-blue-color);
  }

  h2,
  .icon {
    transition: color 0.3s ease;
  }
`;
export default FooterMessage;
