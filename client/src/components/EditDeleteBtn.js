import { FaTrash, FaPen } from 'react-icons/fa';
import styled from 'styled-components';
import { useGlobalContext } from '../contextAPI/context';

const EditDeleteBtn = ({ setEdit, id, replyID }) => {
  const { toggleDeleteAside } = useGlobalContext();
  return (
    <Wrapper>
      <button
        className='delete-btn'
        onClick={() => toggleDeleteAside(id, replyID)}
      >
        <FaTrash className='icon' />
        <h2>Delete</h2>
      </button>
      <button className='edit-btn' onClick={() => setEdit((edit) => !edit)}>
        <FaPen className='icon' />
        <h2>Edit</h2>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h2 {
    line-height: 0;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: 0;
    cursor: pointer;
  }

  .delete-btn {
    color: var(--soft-red-color);

    h2 {
      color: var(--soft-red-color);
    }

    .icon {
      width: 12px;
      height: 14px;
    }

    &:hover {
      .icon,
      h2 {
        color: var(--pale-red-color);
      }
    }
  }

  .edit-btn {
    color: var(--moderate-blue-color);
    .icon {
      width: 14px;
      height: 14px;
    }

    &:hover {
      .icon,
      h2 {
        color: var(--light-grayish-blue-color);
      }
    }
  }
`;

export default EditDeleteBtn;
