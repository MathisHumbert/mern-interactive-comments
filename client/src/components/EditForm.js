import { useState } from 'react';
import styled from 'styled-components';

const EditForm = ({ id, replyID, setEdit, content }) => {
  const [textValue, setTextValue] = useState(content);

  const handleSubmit = () => {
    console.log(textValue);
    setEdit((edit) => !edit);
    // send data
  };
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      ></textarea>
      <button type='submit' className='main-btn' onClick={handleSubmit}>
        update
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
    margin-top: 16px;
  }
`;
export default EditForm;
