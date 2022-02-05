import { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../contextAPI/context';

const CreateForm = () => {
  const { createMessage, user, userLogout } = useGlobalContext();
  const [textValue, setTextValue] = useState();

  const handleSubmit = () => {
    if (!textValue.trim()) return;
    setTextValue('');
    createMessage(textValue);
    // send data
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <img src={user.image.png} alt={user.name} />
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      ></textarea>
      <button type='submit' className='main-btn' onClick={handleSubmit}>
        send
      </button>
      <p onClick={userLogout}>change user</p>
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

  p {
    position: absolute;
    bottom: 1rem;
    left: 70px;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: var(--dark-blue-color);
    }
  }
`;

export default CreateForm;
