import { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../contextAPI/context';

const ReplyForm = ({ id, username, setReply }) => {
  const [textValue, setTextValue] = useState(`@${username}`);
  const { createReply, user } = useGlobalContext();

  const handleSubmit = () => {
    if (textValue.trim() === `@${username}`) return;

    setReply((reply) => !reply);
    const content = textValue.trim().slice(username.length + 1);
    createReply(content, id, username);
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <img src={user.image.png} alt={user.name} />
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
  flex-direction: column;
  position: relative;

  button {
    margin-top: 1rem;
    align-self: end;
  }

  img {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 1rem;
  }
`;

export default ReplyForm;
