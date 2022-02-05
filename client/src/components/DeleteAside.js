import styled from 'styled-components';
import { useGlobalContext } from '../contextAPI/context';

const DeleteAside = () => {
  const {
    deleteAside,
    toggleDeleteAside,
    deleteMessage,
    deleteID,
    deleteReplyID,
  } = useGlobalContext();

  return (
    <Wrapper className={deleteAside ? 'open' : null}>
      <div className='container'>
        <h1>Delete comment</h1>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
        <div className='btn-container'>
          <button
            className='main-btn cancel'
            onClick={() => toggleDeleteAside('', '')}
          >
            no, cancel
          </button>
          <button
            className='main-btn delete'
            onClick={() => {
              deleteMessage(deleteID, deleteReplyID);
              toggleDeleteAside('', '');
            }}
          >
            yes, delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &.open {
    z-index: 5;
    opacity: 1;
  }

  .container {
    padding: 24px 28px;
    background: white;
    margin: 0 1rem;
    border-radius: 8px;
  }

  p {
    margin: 1rem 0;
    max-width: 300px;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  button {
    max-width: 138px;
    min-width: 138px;
  }

  .cancel {
    background: var(--grayish-blue-color);

    &:hover {
      background: rgba(103, 114, 126, 0.5);
    }
  }

  .delete {
    background: var(--soft-red-color);

    &:hover {
      background: var(--pale-red-color);
    }
  }
`;
export default DeleteAside;
