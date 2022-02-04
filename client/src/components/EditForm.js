import { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../contextAPI/context';

const EditForm = ({ id, replyID, setEdit, content }) => {
  const { editMessage } = useGlobalContext();
  const [textValue, setTextValue] = useState(content);

  const handleSubmit = () => {
    if (textValue.trim() === content) {
      setEdit((edit) => !edit);
      return;
    }

    editMessage(textValue, id, replyID);
    setEdit((edit) => !edit);
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
