import { useState } from 'react';
import styled from 'styled-components';

const ReplyForm = ({ id, username, setReply }) => {
  const [textValue, setTextValue] = useState(`@${username}`);

  const handleSubmit = () => {
    console.log(textValue);
    setReply((reply) => !reply);
    // send data
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
  display: grid;
  grid-template-columns: 40px auto;
  gap: 1rem;

  button {
    grid-column: 2 / 3;
    justify-self: end;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export default ReplyForm;
