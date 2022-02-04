import { useState } from 'react';
import styled from 'styled-components';

const ReplyText = ({ id, username, setReply }) => {
  const [textValue, setTextValue] = useState(`@${username}`);

  const handleSubmit = () => {
    console.log(textValue);
    setReply((reply) => !reply);
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <img src='./images/avatars/image-juliusomo.png' alt='user-img' />
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      ></textarea>
      <button type='submit' className='main-btn' onClick={handleSubmit}>
        reply
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  background: #fff;
  padding: 1rem;
  margin-top: 8px;
  border-radius: 8px;
  display: flex;
  gap: 1rem;

  img {
    width: 40px;
    height: 40px;
  }

  textarea {
    width: 100%;
    height: 96px;
    padding: 12px 24px 16px 24px;
    border: 1px solid var(--dark-blue-color);
    border-radius: 8px;
    resize: none;
    font-size: 16px;
    font-weight: 400px;
    color: var(--dark-blue-color);
    line-height: 24px;
    cursor: pointer;
    transition: border 0.3s ease;

    &:focus {
      outline: none;
      border: 1px solid var(--moderate-blue-color);
    }
  }

  .main-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 104px;
    height: 48px;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    background: var(--moderate-blue-color);
    border-radius: 8px;
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover {
      background: var(--light-grayish-blue-color);
    }
  }
`;

export default ReplyText;
